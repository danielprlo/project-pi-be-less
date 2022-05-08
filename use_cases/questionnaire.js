const questionnaireRepository = require('../repositories/questionnaire');

const getQuestionnaire = async (userId) => {

}

const showQuestionnaire = async (userId, questionnaireId) => {
    try {
        await questionnaireRepository.show(userId, questionnaireId);
    } catch (error) {
        throw error;
    }
}

const deleteQuestionnaire = async (questionnaireId) => {

}

const updateQuestionnaire = async (questionnaire) => {
    try {
        await questionnaireRepository.update(questionnaire);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    showQuestionnaire,
    updateQuestionnaire
}