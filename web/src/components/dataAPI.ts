import axios from 'axios';
import questions from '../assets/data/questions.json';
import results from '../assets/data/results.json';

const assessmentResultsURL = process.env.REACT_APP_SUBMIT_RESULTS_URL;
const assessmentSetupDataURL = process.env.REACT_APP_COVID_CDN;

const DataAPI = {
    postAssessmentResults: (payload: any) => {
        return axios.post(`${assessmentResultsURL}`, payload)
            .then( () => console.log('data submitted'))
            .catch( () => console.log('failed to submit'));
    },
    getAssessmentSetupData: (file: string) => {
        return axios.get(`${assessmentSetupDataURL}${file}`)
            .then((response) => response.data)
            .catch(() => {
                console.log('failed to find setup data, providing defaults');
                if (file.includes('questions')){
                    return questions;
                } else {
                    return results;
                }
            });
    }
};

export default DataAPI;