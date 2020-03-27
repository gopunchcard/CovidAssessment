import React from 'react';

import Button from '../core/Button';
import ReactMarkdown from 'react-markdown';
import SubmitCard from './SubmitCard';

type ResultProps = {
	result: {
		id: string,
		header: string,
		description: string,
        previousQuestion?: string,
        showSubmit?: boolean
	},
    navigateTo: (questionId: string) => void,
    submitResults: (resultId: string) => void;
}

const ResultCard: React.FC<ResultProps> = (props: ResultProps) => {
	if (props.result === undefined) {
		return <React.Fragment />;
	}

	const { id, header, description = '', showSubmit = false } = props.result;

	return (
		<React.Fragment>
			<h3>
				{header}
			</h3>
			<ReactMarkdown
				linkTarget="_blank"
				source={description} />
            {showSubmit && (
                <SubmitCard 
                    resultId={id}
                    submitResults={props.submitResults}
                />
            )}
			<Button
				className="btn-outline-primary btn-block mt-4"
				onClick={() => props.navigateTo("q1")}
			>
				Start Over
			</Button>
		</React.Fragment>
	);
}
export default ResultCard;