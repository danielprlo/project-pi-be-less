const questionnaireRepository = require('../repositories/questionnaire');

const getQuestionnaire = async (userId) => {

}

const showQuestionnaire = async (userId, questionnaireId) => {
    try {
        return  await questionnaireRepository.show(userId, questionnaireId);
    } catch (error) {
        throw error;
    }
}

const deleteQuestionnaire = async (questionnaireId, userId) => {
    try {
        return await questionnaireRepository.del(questionnaireId, userId);
    } catch (error) {
        throw error;
    }
}

const updateQuestionnaire = async (questionnaire) => {
    try {
        return await questionnaireRepository.update(questionnaire);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    showQuestionnaire,
    updateQuestionnaire,
    deleteQuestionnaire
}