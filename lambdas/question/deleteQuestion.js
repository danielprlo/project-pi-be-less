const cors = require('../../middlewares/cors');
const questionUseCase = require('../../use_cases/question');

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.questionnaireId;
    const questionId = event.pathParameters.questionId;

    try {
        const data = await questionUseCase.deleteQuestion(questionnaireId, questionId);
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (error) {
        return {
            statusCode: 400,
            error: `Could not query: ${error.stack}`
        };
    }
}

exports.handler = async (event, context) => {
    return cors(await handlerFunction(event, context));
};