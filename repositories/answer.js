const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const create = async(questionnaireId, questionId, value, attemptId) => {
    const params = {
        TableName: 'StudyData',
        Item: {
            pk: 'QUESTIONNAIRE#'+questionnaireId,
            sk: questionId+'#ANSWER#'+attemptId,
            value: value
        },
        ReturnValues: 'ALL_OLD',
    };

    try {
        return await docClient.put(params).promise();
    } catch (error) {
        throw error;
    }
}

module.exports = { create }