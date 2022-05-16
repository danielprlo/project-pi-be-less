const handler = require('../../../lambdas/answer/postAnswers');
const useCase = require('../../../use_cases/answer');
const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/answer');

describe('PostAnswers lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the create answers message', () => {
    const sut = handler.handler;

    it('calls answer use case correctly', async () => {
      useCase.saveAnswers.mockResolvedValue();
      await sut(lambda.getEventRequest());

      expect(useCase.saveAnswers).toHaveBeenCalledTimes(1);
    });
  });
});
