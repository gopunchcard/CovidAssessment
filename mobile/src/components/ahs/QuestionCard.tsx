import React from 'react';
import { View } from 'react-native';
import { Button } from 'components/core';
import { base, mdDetailStyles, mdQuestionStyles } from 'utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Markdown from 'react-native-markdown-display';
import { mdSubQuestionStyles } from 'utils/theme';
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
	nextQuestion: (questionId: string) => void;
	prevQuestion: () => void;
}

const QuestionCard: React.FC<QuestionProps> = (props: QuestionProps) => {
	if (props.question === undefined) {
		return <React.Fragment />;
	}
	const { id, question, question2 = undefined, details, nextPositive, nextNegative, previousQuestion } = props.question;
	return (
		<React.Fragment>
			<View style={[base.flexGrow, base.mb4]}>
				<Markdown style={mdQuestionStyles}>{question}</Markdown>
				{question2 && <Markdown style={mdSubQuestionStyles}>
					{question2}
				</Markdown>}
				{details && <Markdown style={mdDetailStyles}>{details}</Markdown>}
			</View>
			{(previousQuestion &&
				<Button
					icon={<Icon name="arrow-back" style={[base.textPrimary, base.mr1]} size={24} />}
					onPress={() => props.prevQuestion()}
					title="Previous Question"
				/>
			)}
			<View style={[base.flexRow, base.justifyContentBetween]}>
				<Button
					onPress={() => props.nextQuestion(nextNegative)}
					title="NO"
					buttonType="primary"
					style={[base.flex, base.mr1]}
				/>
				<Button
					onPress={() => props.nextQuestion(nextPositive)}
					title="YES"
					buttonType="primary"
					style={[base.flex, base.ml1]}
				/>
			</View>
		</React.Fragment>
	);
}
export default QuestionCard;
