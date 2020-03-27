[![Build Status](https://punchcard.visualstudio.com/AHS%20-%20CovidAssessment/_apis/build/status/AHS%20-%20CovidAssessment/AHS%20-%20CovidAssessment%20CI?branchName=master)](https://punchcard.visualstudio.com/AHS%20-%20CovidAssessment/_build/latest?definitionId=32&branchName=master)

## What is the COVID-19 Assessment Framework
The covid assessment framework provides a web site, android app and iOS app to do simple covid pre-screening assessments. The screening is driven by a simple JSON document which allows fast updates and keeps all the applications in sync.

[See it in action](https://covidassessmentapi.punchcard.dev/)

## Why?
> You cannot fight a fire blindfolded. And we cannot stop this pandemic if we don't know who is infected," Dr. Tedros Adhanom Ghebreyesus, the WHO's director-general

> Key word is test, test, test. But that does not mean “mass testing” because it would be scientifically and logistically useless – WHO deputy director Raniero Guerra explained 

## Who is this for
The tool is designed to allow health authorities to quickly create and distribute covid assessments for their jurisdictions.

## Features
 - Simple yes or no quiz engine to provide a recommendation for covid testing
 - Optionally submit covid assessment results with locations data
 - Web version is easy to embed within an existing site
 - Easy to whitelabel for any jurisdiction

## How do I get started?
The framework consists of 2 parts:
- Mobile App (ReactNative, iOS & Android)
- Web Application (React)

## Configure the Mobile App
To configure the mobile app you will need to modify the /mobile./.env file to enter your server information
    
    SERVER_URL=https://covidassessmentapi.punchcard.dev/data 
    SUBMIT_RESULTS_URL=https://covidassessmentapi.azurewebsites.net/api/CollectData?code=Ftnc7inzs54HrAncVXoiF84bE517kkF8WjUGLThY2Tz5fa3avaa/dA==
| Field  | Use |
| ------------- | ------------- |
| SERVERURL | The server to check for updates to the questions.json and results.json file |
| SUBMIT_RESULTS_URL | An endpoint that can accept a JSON object that contains the assessment result and location (Optional) |

There is also a local cache of the json file located at /mobile/src/assets/data. This will be used if the server cannot be reached to update the questions.json and resutls.json. You will want to place a copy of your json files here.

## Configure the web app
To configure the web app you will need to modify the /web/.env file to enter your server information

    REACT_APP_SUBMIT_RESULTS_URL=https://covidassessmentapi.azurewebsites.net/api/CollectData?code=Ftnc7inzs54HrAncVXoiF84bE517kkF8WjUGLThY2Tz5fa3avaa/dA==
    REACT_APP_COVID_CDN=https://covidassessmentapi.punchcard.dev/data
| Field  | Use |
| ------------- | ------------- |
| REACT_APP_SUBMIT_RESULTS_URL | An endpoint that can accept a JSON object that contains the assessment result and location (Optional) |
| REACT_APP_COVID_CDN | The server to check for updates to the questions.json and results.json file |


### Configure the assessment
The assessment itself is controlled by two files
- questions.json
- results.json
The files are fairly self explainatory, but if anything is unclear please let us know.

## Who made this
The COVID-19 assessment tool was made by the team at [Punchcard](https://punchcard.io)

## Need help?
If you are a health authority looking to deploy and need help please reach out to us at [hello@punchcard.io](email:hello@punchcard.io).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)