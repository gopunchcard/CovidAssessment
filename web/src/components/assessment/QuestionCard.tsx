import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import Button from '../core/Button';
import ReactMarkdown from 'react-markdown';

type QuestionProps = {
	question: {
		id: string,
		question: string,
		question2?: string,
		details?: string,
		nextPositive: string,
		nextNegative: string,
		previousQuestion?: string
	},
	nextQuestion: (questionId: string) => void,
	logResponse: (questionId: string, response: string) => void;
}

const QuestionCard: React.FC<QuestionProps> = (props: QuestionProps) => {
	if (props.question === undefined) {
		return <React.Fragment />;
	}

	const { question, question2 = undefined, details = '', nextPositive, nextNegative, previousQuestion } = props.question;

	const responseSelected = (newQuestionId: string, response: string) => {
		props.logResponse(props.question.id, response);
		props.nextQuestion(newQuestionId);
	}

	return (
		<React.Fragment>
			<h3>
				{question}
			</h3>
			{question2 &&
				<h4>
					{question2}
				</h4>
			}
			<ReactMarkdown source={details} />
			<div className="d-flex mt-4">
				<Button
					className="btn-primary mr-1 flex-fill"
					onClick={() => responseSelected(nextNegative, "NO")}
				>
					NO
				</Button>
				<Button
					className="btn-primary ml-2 flex-fill"
					onClick={() => responseSelected(nextPositive, "YES")}
				>
					YES
				</Button>
			</div>
			<Button
				className="btn-outline-primary btn-block mt-3"
				onClick={() => previousQuestion && responseSelected(previousQuestion, "PREVIOUS")}
				disabled={!previousQuestion}
			>
				<MdArrowBack className="mr-2" />
				Previous Question
			</Button>
		</React.Fragment>
	);
}

export default QuestionCard;