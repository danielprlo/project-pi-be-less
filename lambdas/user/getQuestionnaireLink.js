const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const {getCognitoSubId} = require("../../use_cases/cognito");
const uuid = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});
const questionnaireUseCase = require('../../use_cases/questionnaire');

const handlerFunction = async (event, context) => {
    const userId = '12345';
    const questionnaireId = '1d045813-02aa-4be3-b39f-c7d39e41ba82';

    try {
        const questionnaire = await questionnaireUseCase.showQuestionnaire(userId, questionnaireId);

        if (!questionnaire) {
            return { statusCode: 404, body: "questionnaire not found" };
        }
        if (questionnaire.Item.hasOwnProperty("link") && questionnaire.Item.link !== null) {
            return { statusCode: 200, body: JSON.stringify({link: questionnaire.Item.link}) };
        } else {
            questionnaire.Item.link = uuid.v4();
            const updatedQuestionnaire = await questionnaireUseCase.updateQuestionnaire(questionnaire.Item);
            return { statusCode: 200, body: JSON.stringify({link: updatedQuestionnaire.Item.link}) };
        }
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