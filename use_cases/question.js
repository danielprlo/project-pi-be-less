const questionRepository = require('../repositories/question');

const deleteQuestion = async (questionnaireId, questionId) => {

    try {
        await questionRepository.del(questionnaireId, questionId);
    } catch (error) {
        throw error;
    }
}

const createQuestion = async (questionnaireId, questionId, name, description, details) => {

    try {
        return await questionRepository.create(questionnaireId, questionId, name, description, details);
    } catch (error) {
        throw error;
    }
}

const showQuestion = async (questionnaireId, questionId) => {

    try {
        return await questionRepository.show(questionnaireId, questionId);
    } catch (error) {
        throw error;
    }
}

module.exports = { deleteQuestion, createQuestion, showQuestion }