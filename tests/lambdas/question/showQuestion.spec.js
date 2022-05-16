const handler = require('../../../lambdas/question/showQuestion');
const useCase = require('../../../use_cases/question');
const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/question');

describe('ShowQuestion lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the show message', () => {
    const sut = handler.handler;

    it('calls question use case correctly', async () => {
      useCase.showQuestion.mockResolvedValue();
      await sut(lambda.getEventRequest());

      expect(useCase.showQuestion).toHaveBeenCalledTimes(1);
    });
  });
});
