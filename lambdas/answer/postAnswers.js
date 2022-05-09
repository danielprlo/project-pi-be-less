const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const uuid = require('uuid');
const { getCognitoSubId } = require('../../use_cases/cognito')
const { saveAnswers } = require('../../use_cases/answer')
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.id;
    const attemptId = uuid.v4();
    const parsedBody = JSON.parse(event.body);

    try {
        await saveAnswers(questionnaireId, parsedBody, attemptId);
        return { statusCode: 200 };
    } catch (error) {
        return {
            statusCode: 400,
            body: `Could not query: ${error.stack}`
        };
    }
};

exports.handler = async (event, context) => {
    return cors(await handlerFunction(event, context));
};