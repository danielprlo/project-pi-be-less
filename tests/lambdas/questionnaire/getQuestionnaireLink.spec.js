const handler = require('../../../lambdas/questionnaire/getQuestionnaireLink');
const useCaseQuestionnaire = require('../../../use_cases/questionnaire');
const useCaseCognito = require("../../../use_cases/cognito");

const { lambda } = require('../../fixtures/index');
jest.mock('../../../use_cases/questionnaire');
jest.mock('../../../use_cases/cognito');

describe('GetQuestionnaireLink lambda', () => {
  beforeEach(jest.clearAllMocks);

  describe('Handler receives the get link message', () => {
    const sut = handler.handler;

    it('calls questionnaire use case correctly', async () => {
      useCaseQuestionnaire.showQuestionnaire.mockResolvedValue();
      useCaseCognito.getCognitoSubId.mockResolvedValue();

      await sut(lambda.getEventRequest());

      expect(useCaseQuestionnaire.showQuestionnaire).toHaveBeenCalledTimes(1);
      expect(useCaseCognito.getCognitoSubId).toHaveBeenCalledTimes(1);
    });
  });
});
