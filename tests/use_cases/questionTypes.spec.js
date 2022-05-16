const {
  getTypes,
} = require('../../use_cases/questionTypes');

const repository = require('../../repositories/type');

describe('QuestionTypes use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getTypes', () => {
    it('Should return all question types', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const typeRepoSpy = jest.spyOn(repository, 'get').mockImplementation(() => promise);

      const response = await getTypes()

      expect(typeRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });

});
