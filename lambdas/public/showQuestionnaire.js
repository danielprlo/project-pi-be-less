const cors = require('../../middlewares/cors');
const { getCognitoSubId } = require("../../use_cases/cognito");
const { showQuestionnaireWithoutUserId } = require('../../use_cases/questionnaire')
const { getQuestionnaireIdFromLink } = require('../../use_cases/link');
const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.id;

    try {
        const questionnaireIdFromLink = getQuestionnaireIdFromLink(questionnaireId);
        const data = await showQuestionnaireWithoutUserId(questionnaireIdFromLink);
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
