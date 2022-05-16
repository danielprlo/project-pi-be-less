const handler = require('../../../lambdas/questionnaire/postQuestionnaire');
const useCaseQuestionnaire = require('../../../use_cases/questionnaire');
const useCaseCognito = require("../../../use_cases/cognito");

const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/questionnaire');
jest.mock('../../../use_cases/cognito');

describe('PostQuestionnaire lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the post questionnaire message', () => {
    const sut = handler.handler;

    it('calls questionnaire use case correctly', async () => {
      useCaseQuestionnaire.postQuestionnaire.mockResolvedValue();
      useCaseCognito.getCognitoSubId.mockResolvedValue();

      await sut(lambda.getEventRequest());

      expect(useCaseQuestionnaire.postQuestionnaire).toHaveBeenCalledTimes(1);
      expect(useCaseCognito.getCognitoSubId).toHaveBeenCalledTimes(1);
    });
  });
});
