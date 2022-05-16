const handler = require('../../../lambdas/question/getQuestionnaireQuestions');
const useCase = require('../../../use_cases/question');
const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/question');

describe('GetQuestionnaireQuestions lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the get message', () => {
    const sut = handler.handler;

    it('calls question use case correctly', async () => {
      useCase.getQuestions.mockResolvedValue();
      await sut(lambda.getEventRequest());

      expect(useCase.getQuestions).toHaveBeenCalledTimes(1);
    });
  });
});
