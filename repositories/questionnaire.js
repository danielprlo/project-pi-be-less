const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const del = async (questionnaireId, questionId) => {

}

const create = async (questionnaireId, questionId, name, description, details, type) => {

}

const show = async(userId, questionnaireId) => {
    const params = {
        TableName: 'StudyData',
        Key: {
            'pk': 'USERID#'+userId,
            'sk': 'QUESTIONNAIRE#'+questionnaireId,
        }
    };
    try {
        await docClient.get(params).promise();
    } catch (error) {
        throw error;
    }
}

const update = async(questionnaire) => {
    const update = {
        TableName: 'StudyData',
        Item: questionnaire,
        ReturnValues: 'ALL_OLD',
    };

    try {
        return await docClient.put(update).promise();
    } catch (error) {
        throw error;
    }
}

module.exports = { del, create, show, update }