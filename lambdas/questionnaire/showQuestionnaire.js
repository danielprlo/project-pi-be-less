const cors = require('../../middlewares/cors');
const { getCognitoSubId } = require("../../use_cases/cognito");
const { showQuestionnaire } = require('../../use_cases/questionnaire')

const handlerFunction = async (event, context) => {
    const questionnaireId = event.pathParameters.id;
    const userId          = getCognitoSubId(event);

    try {
        const data = await showQuestionnaire(questionnaireId, userId);
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
