const questionnaireRepository = require('../repositories/questionnaire');

const getQuestionnaires = async (userId) => {
    try {
        return await questionnaireRepository.get(userId);
    } catch (error) {
        throw error;
    }
}

const showQuestionnaire = async (questionnaireId, userId) => {
    try {
        return await questionnaireRepository.show(questionnaireId, userId);
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

const postQuestionnaire = async (questionnaireId, userId, parsedBody) => {
    try {
        return await questionnaireRepository.create(questionnaireId, userId, parsedBody);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    showQuestionnaire,
    updateQuestionnaire,
    deleteQuestionnaire,
    getQuestionnaires,
    postQuestionnaire
}