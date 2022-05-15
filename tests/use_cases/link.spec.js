const {
  generateLinkFromQuestionnaireId
} = require('../../use_cases/link');

describe('Link use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateLinkFromQuestionnaireId', () => {
    it('Should return a correct link', async () => {

      const response = generateLinkFromQuestionnaireId('123');
      expect(response).toEqual('https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/123');
    });
  });
});
