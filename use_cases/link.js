const uuid = require('uuid');
const generateLinkFromQuestionnaireId = (questionnaireId) => {
    return 'http://localhost:8081/fill-questionnaire/'+questionnaireId+'/'+uuid.v4();
}

module.exports = { generateLinkFromQuestionnaireId }