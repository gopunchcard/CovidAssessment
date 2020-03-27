import React, { useState, useEffect } from 'react';
import Button from '../core/Button';

type SubmitProp = {
    resultId: (string),
    submitResults: (resultId: string) => void;
}

const SubmitCard: React.FC<SubmitProp> = (props: SubmitProp) => {
    const { resultId } = props;
    const [isSubmitted, SetIsSubmitted] = useState<boolean>(false);
    const [header, setHeader] = useState<string>("Help us by submitting your results anonymously");
    const [message, setMessage] = useState<string>("Submit the results of your assessment and your location to help us track and identify hot spots.");

    useEffect(() => {
        if (isSubmitted) {
            setHeader("Thank you");
            setMessage("Your submission has been received.");
        }
    }, [isSubmitted])

    const submit = () => {
        SetIsSubmitted(true);
        props.submitResults(resultId);
    }

    return (
        <React.Fragment>
            <div className="card-body bg-light">
                <h5 className="bg-light">{header}</h5>
                <div>{message}</div>
                {!isSubmitted && 
                    <Button
                        className="btn-primary mt-3"
                        onClick={() => submit()}
                        
                    >
                        SUBMIT RESULTS
                    </Button>
                }
            </div>
        </React.Fragment>
    );
}

export default SubmitCard;