const cors = require('../../middlewares/cors');
const { getCognitoSubId } = require("../../use_cases/cognito");
const { getQuestionnaires } = require('../../use_cases/questionnaire');

const handlerFunction = async (event, context) => {
    const userId = getCognitoSubId(event);

    try {
        const data = await getQuestionnaires(userId);
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