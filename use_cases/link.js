const generateLinkFromQuestionnaireId = (questionnaireId) => {
    return 'http://localhost:8081/fill-questionnaire/'+questionnaireId;
}

module.exports = { generateLinkFromQuestionnaireId }