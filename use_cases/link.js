const linkRepo = require('../repositories/link');

const generateLinkFromQuestionnaireId = async(questionnaireId, userId) => {
    try {
        await linkRepo.save(questionnaireId, userId);
    } catch (error) {
        throw error;
    }

    return 'https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/'+questionnaireId;
}

const getQuestionnaireIdFromLink = async(questionnaireId) => {
    try {
        const item = await linkRepo.get(questionnaireId);
    } catch (error) {
        throw error;
    }

    if(item.Item) {
        const questionnaireId = item.Item.pk.replace('LINK#', '');
        return 'USER#'+item.Item.sk+'QUESTIONNAIRE#'+questionnaireId
    }

    return '';
}


module.exports = { generateLinkFromQuestionnaireId, getQuestionnaireIdFromLink }