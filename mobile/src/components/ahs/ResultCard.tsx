import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'components/core';
import { base, mdQuestionStyles, mdDetailStyles, constants } from 'utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Markdown from 'react-native-markdown-display';

type ResultProps = {
	result: {
		id: string,
		header: string,
		descriptions?: Array<JSX.Element>,
		description?: string,
		showSubmit?: boolean
	}

	navigateTo: (questionId: string) => void;
	submitResults: () => void;
	isSubmitting: boolean;
	isSubmitted: boolean;
}

const ResultCard: React.FC<ResultProps> = (props: ResultProps) => {

	if (props.result === undefined) {
		return <React.Fragment />;
	}
	const { id, header, descriptions = [], description = '', showSubmit = false } = props.result;
	return (
		<React.Fragment>
			<View style={[base.flexGrow, base.pb4]}>
				<Markdown style={mdQuestionStyles}>
					{header}
				</Markdown>
				<Markdown style={mdDetailStyles}>{description}</Markdown>
				{descriptions.map((desciption, key) =>
					<View key={key} style={[base.flexRow]}>
						<Text style={[base.mr1, base.alignItemsEnd]}>{' \u2022 '}</Text>
						<Text style={[base.flexGrow, base.flexShrink]}>{desciption}</Text>
					</View>
				)}
			</View>
			{showSubmit && (
				props.isSubmitted ? (
					<View style={[
						base.bgGray200,
						{
							marginLeft: -constants.dimensions.spacer * 2,
							marginRight: -constants.dimensions.spacer * 2,
							paddingHorizontal: constants.dimensions.spacer * 2,
							paddingVertical: constants.dimensions.spacer * 4,
						}
					]}>
						<Text style={[base.h2, base.mb3]}>
							Thank you.
						</Text>
						<Text>Your submission has been received.</Text>
					</View>
				) : (
						<View style={[
							base.bgLight,
							{
								marginLeft: -constants.dimensions.spacer * 2,
								marginRight: -constants.dimensions.spacer * 2,
								paddingHorizontal: constants.dimensions.spacer * 2,
								paddingVertical: constants.dimensions.spacer * 4,
							}
						]}>
							<Text style={[base.h2, base.mb3]}>
								Help us by submitting your results anonymously.
					</Text>
							<Text style={[base.mb4]}>Submit the results of your assessment and your location to help us track and identify hot spots.</Text>
							<Button
								onPress={() => props.submitResults()}
								title={props.isSubmitting ? "Submitting" : "Submit Results"}
								buttonType="primary"
								style={[base.flex, base.mb0]}
								disabled={props.isSubmitting}
							/>
						</View>
					))}
			<View style={[base.flexRow, base.justifyContentBetween, base.mt4]}>
				<Button
					icon={<Icon name="replay" style={[base.textPrimary, base.mr1]} size={24} />}
					onPress={() => props.navigateTo("q1")}
					title="Start Over"
					buttonType="primaryOutline"
					style={[base.flex]}
				/>
			</View>
		</React.Fragment>
	);
}
export default ResultCard;
