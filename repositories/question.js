const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const del = async (questionnaireId, questionId) => {
    const params = {
        TableName: 'StudyData',
        Key: {
            pk: 'QUESTIONNAIRE#' + questionnaireId,
            sk: 'QUESTION#' + questionId,
        }
    };

    try {
        await docClient.delete(params).promise();
        return true;
    } catch (error) {
        throw (error);
    }
}

const create = async (questionnaireId, questionId, name, description, details, type) => {
    const params = {
        TableName: 'StudyData',
        Item: {
            pk: 'QUESTIONNAIRE#'+questionnaireId,
            sk: 'QUESTION#'+questionId,
            name: name,
            description: description,
            details: details,
            type: type
        },
        ReturnValues: 'ALL_OLD',
    };

    try {
        return await docClient.put(params).promise();
    } catch (error) {
        throw error;
    }
}

const show = async(questionnaireId, questionId) => {
    const params = {
        TableName: 'StudyData',
        KeyConditionExpression: '#pk = :pk and #sk = :sk',
        ExpressionAttributeNames:{
            "#pk": "pk",
            "#sk": 'sk',
        },
        ExpressionAttributeValues: {
            ":pk": "QUESTIONNAIRE#"+questionnaireId,
            ":sk": "QUESTION#"+questionId,
        }
    };

    try {
        return await docClient.query(params).promise();
    } catch (error) {
        throw error;
    }
}

module.exports = { del, create, show }