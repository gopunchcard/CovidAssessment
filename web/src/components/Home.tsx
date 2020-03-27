import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Utils from '../common/utils';
import QuestionCard from './assessment/QuestionCard';
import ResultCard from './assessment/ResultCard';
import Page from './core/Page';
import { ReactComponent as WordMarkCSA } from '../assets/img/wordmark-csa.svg';
import DataAPI from './dataAPI';
import localQuestions from '../assets/data/questions.json';
import localResults from '../assets/data/results.json';

const path = process.env.REACT_APP_ASSESSMENT_PATH;

const Home: React.FC = ( ) => {
	const [questionId, setQuestionId] = useState<string>("q1");
	const [questions, setQuestions] = useState<Array<any>>(localQuestions);
	const [results, setResults] = useState<Array<any>>(localResults);
    const [responses, setRepsonses] = useState<Array<any>>([]);
    const [questionChanging, setQuestionChanging] = useState<boolean>(false);
    const [assessmentSetupPath, setAssessmentSetupPath] = useState<any>(path);

	useEffect(() => {
        DataAPI.getAssessmentSetupData(`${assessmentSetupPath}/questions.json`)
            .then(data => setQuestions(data));

        DataAPI.getAssessmentSetupData(`${assessmentSetupPath}/results.json`)
            .then(data => setResults(data));
	}, [assessmentSetupPath]);

	const navigateTo = (newQuestionId: string) => {
		console.log("Moving: " + questionId + " => " + newQuestionId);
		if (newQuestionId === "q1") setRepsonses([]);
		setQuestionId(newQuestionId);
	}

	const logResponse = (questionId: string, response: string) => {
		const updatedResponses = responses.slice();
		if (response === "PREVIOUS") {
			updatedResponses.pop();
		} else {
			updatedResponses.push(
				{
					id: questionId,
					response
				}
			);
		}
		setRepsonses(updatedResponses);
    }

    const getUserLocation = () => {
        return new Promise((results, error) => {
            if (!navigator.geolocation) {
                console.log("geolocation not supported by browser");
                return;
            }

            navigator.geolocation.getCurrentPosition(results, error);
        });
    }

    const postResults = (payload: any) => {
        DataAPI.postAssessmentResults(payload);
    }
    
    const submitResults = (resultId: string) => {
        const payload = {
            location: {
                lat: null,
                lng: null
            },
            responses,
            result: resultId
        }

        getUserLocation()
        .then((results: any) => {
            payload.location.lat = results.coords.latitude;
            payload.location.lng = results.coords.longitude;
            postResults(payload);
        })
        .catch(() => {
            console.log("unable to retrieve location");
            postResults(payload);
        });
    }

    const changeQuestion = (questionId: string) => {
		setQuestionChanging(true);
		setTimeout(() => {
			navigateTo(questionId);
			setQuestionChanging(false);
		}, Utils.transitionDuration);
	}

	const getQuestionOrResult = () => {
		if (questionId.startsWith("q")) {
			let currentQuestion = questions.find(x => x.id === questionId)

			if (currentQuestion === undefined) {
				currentQuestion = questions[0];
				console.warn('Question Not Found');
			}

			return (
                <QuestionCard 
                    question={currentQuestion} 
                    nextQuestion={changeQuestion} 
                    logResponse={logResponse} 
                />
            );
		}
		else {
			let currentResult = results.find(x => x.id === questionId)

			if (currentResult === undefined) {
				currentResult = results[0];
				console.warn('Result Not Found');
            }

            return (
                <ResultCard 
                    navigateTo={changeQuestion} 
                    result={currentResult} 
                    submitResults={submitResults}
                />
            );
		}
	}

	return (
		<Page
			title='COVID-19 Assessment'
		>
			<div className="row">
				<div className="col-md-10 col-lg-8 mx-auto">
					<WordMarkCSA className="mb-4 navbar-logo" />
					<AnimatePresence>
						{!questionChanging &&
							<motion.div
								initial={{ opacity: 0 }}
								animate={{  opacity: 1 }}
								transition={{ ease: "easeInOut", duration: Utils.transitionDuration / 1000 }}
								exit={{ opacity: 0 }}
							>
								{getQuestionOrResult()}
							</motion.div>
						}
					</AnimatePresence>
				</div>
			</div>
		</Page>
	);
}
export default Home;