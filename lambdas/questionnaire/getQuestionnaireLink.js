const cors = require('../../middlewares/cors');
const { getCognitoSubId } = require("../../use_cases/cognito");
const { generateLinkFromQuestionnaireId } = require("../../use_cases/link");
const questionnaireUseCase = require('../../use_cases/questionnaire');

const handlerFunction = async (event, context) => {
    const userId = getCognitoSubId(event);
    const questionnaireId = event.pathParameters.id;

    try {
        const questionnaire = await questionnaireUseCase.showQuestionnaire(questionnaireId, userId);

        if (!questionnaire) {
            return { statusCode: 404, body: "questionnaire not found" };
        }
        if (questionnaire.Item.hasOwnProperty("link") && questionnaire.Item.link !== null) {
            return { statusCode: 200, body: JSON.stringify({link: questionnaire.Item.link}) };
        } else {
            const link = await generateLinkFromQuestionnaireId(questionnaireId, userId);
            questionnaire.Item.link = link;
            await questionnaireUseCase.updateQuestionnaire(questionnaire.Item);
            return { statusCode: 200, body: JSON.stringify({link: link}) };
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