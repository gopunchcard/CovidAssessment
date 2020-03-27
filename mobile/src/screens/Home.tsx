import React from 'react';
import { Image, View, ScrollView, Platform, UIManager, Alert } from 'react-native';
import QuestionCard from 'components/ahs/QuestionCard';
import ResultCard from 'components/ahs/ResultCard';
import questionsLocal from '../assets/data/questions.json';
import resultsLocal from '../assets/data/results.json';
import { Container } from 'components/core';
import { base } from 'utils';
import axios from 'axios'
// @ts-ignore
import { DATA_PATH, SERVER_URL, SUBMIT_RESULTS_URL } from 'react-native-dotenv'
import FullScreenIndicator from 'components/ahs/FullScreenIndicator';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home: React.FC = () => {
	const [questionId, setQuestionId] = React.useState<string>("q1");
	const [questions, setQuestions] = React.useState<Array<any>>([]);
	const [results, setResults] = React.useState<Array<any>>([]);
	const [history, setHistory] = React.useState<Array<any>>([]);
	const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

	const scrollViewRef = React.useRef<ScrollView>(null);
	React.useEffect(() => {
		if (scrollViewRef.current !== null) {
			scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
		}
	}, [questionId])

	// Checking for updates everytime, maybe we should use etags 
	React.useEffect(() => {
		axios.defaults.timeout = 1500; // 1.5 second
		axios.get(SERVER_URL + DATA_PATH + 'questions.json')
			.then(res => {
				setQuestions(res.data);
			})
			.catch(err => {
				console.log('failed to get questions');
				setQuestions(questionsLocal);
			});
		axios.get(SERVER_URL + DATA_PATH + 'results.json')
			.then(res => { setQuestions(res.data); })
			.catch(err => {
				console.log('failed to get results');
				setResults(resultsLocal);
			});
	}, []);

	const navigateTo = (newQuestionId: string) => {
		if (newQuestionId == "q1") {
			history.length = 0
			console.log("Clearing history");
			console.log(history);
			setIsSubmitting(false);
			setIsSubmitted(false);
		}
		else
			history.push(questionId)
		setHistory(history);
		console.log("Moving: " + questionId + " => " + newQuestionId);
		setQuestionId(newQuestionId);
	}
	const goBack = () => {
		let newQuestionId = history.pop()
		setHistory(history);
		console.log("Going back: " + questionId + " => " + newQuestionId);
		setQuestionId(newQuestionId);
	}
	const showSubmitDialog = () => {
		Alert.alert(
			'Include Geolocation Data?',
			'All data is anonymized and private.',
			[
				{text: 'Submit with Location ', onPress: promptForGeolocation},
				{text: 'Submit without Location', onPress: () => submitResults() },
				{text: 'Cancel', onPress: () => null},
			],
			{ cancelable: false }
		)
	}
	const promptForGeolocation = () => {
		Geolocation.getCurrentPosition(info => submitResults(info));
	}
	const submitResults = (location: GeolocationResponse | undefined = undefined) => {
		setIsSubmitting(true);

		const submission = {
			lat: location && location.coords.latitude,
			long: location && location.coords.longitude,
			result: questionId,
			history: history
		};

		axios.defaults.timeout = 15000; // 15 seconds
		axios.post(SUBMIT_RESULTS_URL, { submission })
			.then(r => { 
				console.log('data submited');
				Alert.alert('Submission recieved, thank you!'); 
				setIsSubmitting(false);
			})
			.catch(err => {
				console.log('failed to submit');
			});
	}
	const getQuestionOrResult = () => {
		if (questions.length > 0) {
			if (questionId.startsWith("q")) {
				let currentQuestion = questions.find(x => x.id === questionId)
				if (currentQuestion === undefined) {
					currentQuestion = questions[0];
				}

				return <QuestionCard question={currentQuestion} nextQuestion={navigateTo} prevQuestion={goBack} />
			}
			else {
				let currentResult = results.find(x => x.id === questionId)

				if (currentResult === undefined) {
					currentResult = results[0];
					console.warn('Result Not Found')

				}
				return (
					<ResultCard
						navigateTo={navigateTo}
						result={currentResult}
						submitResults={showSubmitDialog}
						isSubmitting={isSubmitting}
						isSubmitted={isSubmitted}
					/>
				);
			}
		}
	}
	console.log(history);
	return (
		<Container>
			<View style={[base.flexRow, base.px3, base.py3]}>
				<Image
					source={require('assets/img/wordmark-csa.png')}
					style={[{ width: 134, height: 28 }]}
				/>
			</View>
			<ScrollView contentInsetAdjustmentBehavior="always" contentContainerStyle={[base.flexGrow]} ref={scrollViewRef} scrollToOverflowEnabled={true}>
				<View style={[base.flexGrow, base.mx3]}>
					{getQuestionOrResult()}
				</View>
			</ScrollView>
		</Container>
	);
}
export default Home;