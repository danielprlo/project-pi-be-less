const {
  saveAnswers
} = require('../../use_cases/answer');

const repository = require('../../repositories/answer');

describe('Answer use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('get action', () => {
    it('Should return true', async () => {
      const promise = new Promise((resolve) => resolve());
      const createAnswerRepoSpy = jest.spyOn(repository, 'create').mockImplementation(() => promise);

      const response = await saveAnswers('123', [{"questionId":"QUESTION#22488a7c-8c25-4356-85c3-e29ddbf5cdde","answer":"asdada"}], '231313')

      expect(createAnswerRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(1);
    });
  });
});
