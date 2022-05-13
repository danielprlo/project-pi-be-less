const generateLinkFromQuestionnaireId = (questionnaireId) => {
    return 'https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/'+questionnaireId;
}

module.exports = { generateLinkFromQuestionnaireId }