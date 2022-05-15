const {
  deleteQuestion,
  createQuestion,
  showQuestion,
  getQuestions
} = require('../../use_cases/question');

const repository = require('../../repositories/question');

describe('Question use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('deleteQuestion', () => {
    it('Should delete one question', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const deleteQuestionRepoSpy = jest.spyOn(repository, 'del').mockImplementation(() => promise);

      const response = await deleteQuestion('123', '123')

      expect(deleteQuestionRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });

  describe('createQuestion', () => {
    it('Should create one question', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const createQuestionRepoSpy = jest.spyOn(repository, 'create').mockImplementation(() => promise);

      const response = await createQuestion('123', '123')

      expect(createQuestionRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });

  describe('showQuestion', () => {
    it('Should retrieve one question', async () => {
      const promise = new Promise((resolve) => resolve({"Items":[{"sk":"QUESTION#23df3d85-8f77-42bf-be7f-ea63f5c6f6b0","details":"[{\"label\":\"A new one\",\"value\":\"new\"},{\"label\":\"The second one\",\"value\":\"second\"}]","description":"adsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Chose one of this ma friend","type":"checkbox"}],"Count":1,"ScannedCount":1}));
      const showQuestionRepoSpy = jest.spyOn(repository, 'show').mockImplementation(() => promise);

      const response = await showQuestion('123', '123')

      expect(showQuestionRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual({"Items":[{"sk":"QUESTION#23df3d85-8f77-42bf-be7f-ea63f5c6f6b0","details":"[{\"label\":\"A new one\",\"value\":\"new\"},{\"label\":\"The second one\",\"value\":\"second\"}]","description":"adsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Chose one of this ma friend","type":"checkbox"}],"Count":1,"ScannedCount":1});
    });
  });

  describe('getQuestions', () => {
    it('Should retrieve all question', async () => {
      const promise = new Promise((resolve) => resolve({"Items":[{"sk":"QUESTION#23df3d85-8f77-42bf-be7f-ea63f5c6f6b0","details":"[{\"label\":\"A new one\",\"value\":\"new\"},{\"label\":\"The second one\",\"value\":\"second\"}]","description":"adsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Chose one of this ma friend","type":"checkbox"},{"sk":"QUESTION#263ee997-707a-4458-813e-763c2125cd23","details":"[]","description":"thaadsaa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"YEAH","type":"text"},{"sk":"QUESTION#88112d71-3f2f-414b-af88-032357608f81","details":"[]","description":"asdasdsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"new question","type":"text"},{"sk":"QUESTION#d03da25c-bfa2-48d8-b568-90e935684793","details":"[{\"label\":\"I like swiming\",\"value\":\"swim\"},{\"label\":\"Running is better\",\"value\":\"run\"}]","description":"dasda","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"The dropdown one ","type":"dropdown"},{"sk":"QUESTION#e113c78b-e0a9-486c-9e00-dc8de04f2a14","details":"[]","description":"dasdad","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Another question goes","type":"text"}],"Count":5,"ScannedCount":5}));
      const getQuestionRepoSpy = jest.spyOn(repository, 'get').mockImplementation(() => promise);

      const response = await getQuestions('123')

      expect(getQuestionRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual({"Items":[{"sk":"QUESTION#23df3d85-8f77-42bf-be7f-ea63f5c6f6b0","details":"[{\"label\":\"A new one\",\"value\":\"new\"},{\"label\":\"The second one\",\"value\":\"second\"}]","description":"adsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Chose one of this ma friend","type":"checkbox"},{"sk":"QUESTION#263ee997-707a-4458-813e-763c2125cd23","details":"[]","description":"thaadsaa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"YEAH","type":"text"},{"sk":"QUESTION#88112d71-3f2f-414b-af88-032357608f81","details":"[]","description":"asdasdsa","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"new question","type":"text"},{"sk":"QUESTION#d03da25c-bfa2-48d8-b568-90e935684793","details":"[{\"label\":\"I like swiming\",\"value\":\"swim\"},{\"label\":\"Running is better\",\"value\":\"run\"}]","description":"dasda","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"The dropdown one ","type":"dropdown"},{"sk":"QUESTION#e113c78b-e0a9-486c-9e00-dc8de04f2a14","details":"[]","description":"dasdad","pk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","name":"Another question goes","type":"text"}],"Count":5,"ScannedCount":5});
    });
  });
});
