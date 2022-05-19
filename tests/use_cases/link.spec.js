const {
  generateLinkFromQuestionnaireId
} = require('../../use_cases/link');
const repository = require('../../repositories/link');

describe('Link use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateLinkFromQuestionnaireId', () => {
    it('Should return a correct link', async () => {
      const promise = new Promise((resolve) => resolve());
      const saveLinkRepoSpy = jest.spyOn(repository, 'save').mockImplementation(() => promise);

      const response = await generateLinkFromQuestionnaireId('123', '123');

      expect(saveLinkRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual('https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/123');
    });
  });
});
