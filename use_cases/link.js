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
    console.log('Goign to do the try')
    let item;
    try {
        console.log('calling it');
        item = await linkRepo.get(questionnaireId);
    } catch (error) {
        throw error;
    }

    console.log('Da item', item);
    console.log('Da item', item.Items);

    return item.Items[0].sk;
    if(item.Items.length > 0) {
        return item.Items[0].sk;
    }

    return '';
}


module.exports = { generateLinkFromQuestionnaireId, getQuestionnaireUserFromId }