const cors = require('../../middlewares/cors');
const uuid = require('uuid');
const { saveAnswers } = require('../../use_cases/answer')

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.id;
    const attemptId = uuid.v4();
    const parsedBody = JSON.parse(event.body);
    try {
        const data = await saveAnswers(questionnaireId, parsedBody, attemptId);
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