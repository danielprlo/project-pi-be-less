const answerRepository = require('../repositories/answer');

const saveAnswers = async (questionnaireId, answers, attemptId) => {
    let stored = 0;
    try {
        for (const answer of answers) {
            await answerRepository.create(questionnaireId, answer.questionId, answer.answer, attemptId);
            stored++;
        }

        return stored;
    } catch (error) {
        throw error;
    }
}



module.exports = { saveAnswers }