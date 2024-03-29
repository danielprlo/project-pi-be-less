const cors = require('../../middlewares/cors');
const { getQuestions } = require("../../use_cases/question");

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.id;

    try {
        const data = await getQuestions(questionnaireId);
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