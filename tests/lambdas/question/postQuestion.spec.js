const handler = require('../../../lambdas/question/postQuestion');
const useCase = require('../../../use_cases/question');
const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/question');

describe('PostQuestion lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the post message', () => {
    const sut = handler.handler;

    it('calls question use case correctly', async () => {
      useCase.createQuestion.mockResolvedValue();
      await sut(lambda.getEventRequest());

      expect(useCase.createQuestion).toHaveBeenCalledTimes(1);
    });
  });
});
