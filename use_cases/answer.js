const answerRepository = require('../repositories/answer');

const saveAnswers = async (questionnaireId, answers, attemptId) => {
    try {
        Object.keys(answers, attemptId).map(function(questionId) {
            answerRepository.create(questionnaireId, questionId, answersList[questionId], attemptId);
        });

        return true;
    } catch (error) {
        throw error;
    }
}



module.exports = { saveAnswers }