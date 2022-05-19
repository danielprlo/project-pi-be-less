const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const { getQuestions } = require("../../use_cases/question");
const { getQuestionnaireIdFromLink } = require('../../use_cases/link');

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.questionnaireId;

    try {
        const questionnaireIdFromLink = getQuestionnaireIdFromLink(questionnaireId);
        const data = await getQuestions(questionnaireIdFromLink);
        return { statusCode: 200, body: JSON.stringify(data) };
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