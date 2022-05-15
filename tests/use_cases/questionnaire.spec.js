const {
  getQuestionnaires,
  showQuestionnaire,
  deleteQuestionnaire,
  updateQuestionnaire,
  postQuestionnaire
} = require('../../use_cases/questionnaire');

const repository = require('../../repositories/questionnaire');

describe('Questionnaire use case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getQuestionnaires', () => {
    it('Should get multiple questionnaires', async () => {
      const promise = new Promise((resolve) => resolve({"Items":[{"sk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/551919e6-bca8-40ff-ac90-dac858cc53ea","description":"here we go","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Testing new study"},{"sk":"QUESTIONNAIRE#67982e90-00c6-4b1f-9ef4-f58c1d6f1027","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/67982e90-00c6-4b1f-9ef4-f58c1d6f1027","description":"this one should work fine","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Second study"},{"sk":"QUESTIONNAIRE#cd56a1e5-183e-4855-b6cc-ff78df9629fc","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/cd56a1e5-183e-4855-b6cc-ff78df9629fc","description":"adssad","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Creating study"}],"Count":3,"ScannedCount":3}));
      const getQuestionnairesRepoSpy = jest.spyOn(repository, 'get').mockImplementation(() => promise);

      const response = await getQuestionnaires('123')

      expect(getQuestionnairesRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual({"Items":[{"sk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/551919e6-bca8-40ff-ac90-dac858cc53ea","description":"here we go","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Testing new study"},{"sk":"QUESTIONNAIRE#67982e90-00c6-4b1f-9ef4-f58c1d6f1027","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/67982e90-00c6-4b1f-9ef4-f58c1d6f1027","description":"this one should work fine","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Second study"},{"sk":"QUESTIONNAIRE#cd56a1e5-183e-4855-b6cc-ff78df9629fc","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/cd56a1e5-183e-4855-b6cc-ff78df9629fc","description":"adssad","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Creating study"}],"Count":3,"ScannedCount":3});
    });
  });

  describe('showQuestionnaire', () => {
    it('Should get one questionnaire', async () => {
      const promise = new Promise((resolve) => resolve({"Item":{"sk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/551919e6-bca8-40ff-ac90-dac858cc53ea","description":"here we go","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Testing new study"}}));
      const showQuestionnairesRepoSpy = jest.spyOn(repository, 'show').mockImplementation(() => promise);

      const response = await showQuestionnaire('123')

      expect(showQuestionnairesRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual({"Item":{"sk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/551919e6-bca8-40ff-ac90-dac858cc53ea","description":"here we go","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Testing new study"}});
    });
  });

  describe('deleteQuestionnaire', () => {
    it('Should delete one questionnaire', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const delQuestionnairesRepoSpy = jest.spyOn(repository, 'del').mockImplementation(() => promise);

      const response = await deleteQuestionnaire('123')

      expect(delQuestionnairesRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });

  describe('updateQuestionnaire', () => {
    it('Should update one questionnaire', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const updateQuestionnairesRepoSpy = jest.spyOn(repository, 'update').mockImplementation(() => promise);

      const response = await updateQuestionnaire({"sk":"QUESTIONNAIRE#551919e6-bca8-40ff-ac90-dac858cc53ea","link":"https://dnbjqdte2wiuk.cloudfront.net/fill-questionnaire/551919e6-bca8-40ff-ac90-dac858cc53ea","description":"here we go","pk":"USERID#d89f1f06-aae9-464b-98fb-dc084c0a03ed","name":"Testing new study"})

      expect(updateQuestionnairesRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });

  describe('postQuestionnaire', () => {
    it('Should create one questionnaire', async () => {
      const promise = new Promise((resolve) => resolve(true));
      const createQuestionnairesRepoSpy = jest.spyOn(repository, 'create').mockImplementation(() => promise);

      const response = await postQuestionnaire('1234', '1234', 'body')

      expect(createQuestionnairesRepoSpy).toBeCalledTimes(1);
      expect(response).toEqual(true);
    });
  });
});
