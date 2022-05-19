const linkRepo = require('../repositories/link');

const generateLinkFromQuestionnaireId = async(questionnaireId, userId) => {
    try {
        await linkRepo.save(questionnaireId, userId);
    } catch (error) {
        throw error;
    }

    return 'https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/'+questionnaireId;
}

const getQuestionnaireUserFromId = async(questionnaireId) => {
    let item;
    try {
        item = await linkRepo.get(questionnaireId);
    } catch (error) {
        throw error;
    }

    if(item.Items.length > 0) {
        return item.Items[0].sk;
    }

    return '';
}


module.exports = { generateLinkFromQuestionnaireId, getQuestionnaireUserFromId }