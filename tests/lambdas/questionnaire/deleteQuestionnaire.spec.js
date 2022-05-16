const handler = require('../../../lambdas/questionnaire/deleteQuestionnaire');
const useCaseQuestionnaire = require('../../../use_cases/questionnaire');
const useCaseCognito = require("../../../use_cases/cognito");

const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/questionnaire');
jest.mock('../../../use_cases/cognito');

describe('DeleteQuestionnaire lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the delete questionnaire message', () => {
    const sut = handler.handler;

    it('calls questionnaire use case correctly', async () => {
      useCaseQuestionnaire.deleteQuestionnaire.mockResolvedValue();
      useCaseCognito.getCognitoSubId.mockResolvedValue();

      await sut(lambda.getEventRequest());

      expect(useCaseQuestionnaire.deleteQuestionnaire).toHaveBeenCalledTimes(1);
      expect(useCaseCognito.getCognitoSubId).toHaveBeenCalledTimes(1);
    });
  });
});
