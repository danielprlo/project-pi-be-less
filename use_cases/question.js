const questionRepository = require('../repositories/question');

const deleteQuestion = async (questionnaireId, questionId) => {
    try {
        return await questionRepository.del(questionnaireId, questionId);
    } catch (error) {
        throw error;
    }
}

const createQuestion = async (questionnaireId, questionId, name, description, details, type) => {
    try {
        return await questionRepository.create(questionnaireId, questionId, name, description, details, type);
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

const getQuestions = async (questionnaireId) => {
    try {
        return await questionRepository.get(questionnaireId);
    } catch (error) {
        throw error;
    }
}

const deleteAllQuestions = async (questionnaireId) => {
    try {
        const questions = await questionRepository.get(questionnaireId);
        if (questions.Items.length > 0) {
            questions.Items.forEach(async question => {
                console.log('this is going to be deleted');
                console.log(question.pk.replace('QUESTIONNAIRE#', ''));
                console.log(question.sk.replace('QUESTION#', ''));
                await questionRepository.del(
                    question.pk.replace('QUESTIONNAIRE#', ''),
                    question.sk.replace('QUESTION#', ''));
            })
        }
    } catch (error) {
        throw error;
    }

    return true;
}

module.exports = { deleteQuestion, createQuestion, showQuestion, getQuestions, deleteAllQuestions }