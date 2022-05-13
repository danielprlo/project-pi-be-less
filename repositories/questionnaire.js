const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const del = async (questionnaireId, userId) => {
    const params = {
        TableName: 'StudyData',
        Key: {
            pk: 'USERID#'+userId,
            sk: 'QUESTIONNAIRE#'+questionnaireId,
        }
    };

    try {
        return await docClient.delete(params).promise();
    } catch (error) {
        throw error
    }
}

const create = async (questionnaireId, userId, parsedBody) => {
    const params = {
        TableName: 'StudyData',
        Item: {
            pk: 'USERID#'+userId,
            sk: 'QUESTIONNAIRE#'+questionnaireId,
            name: parsedBody.name,
            description: parsedBody.description,
            type: parsedBody.type,
            details: parsedBody.details
        },
        ReturnValues: 'ALL_OLD',
    };

    try {
        return await docClient.put(params).promise();
    } catch (error) {
        throw error;
    }
}

const show = async(questionnaireId, userId) => {
    const params = {
        TableName: 'StudyData',
        Key: {
            'pk': 'USERID#'+userId,
            'sk': 'QUESTIONNAIRE#'+questionnaireId,
        }
    };
    try {
        return await docClient.get(params).promise();
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

const get = async(userId) => {
    const params = {
        TableName: 'StudyData',
        KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
        ExpressionAttributeNames:{
            "#pk": "pk",
            "#sk": "sk",
        },
        ExpressionAttributeValues: {
            ":pk": 'USERID#'+userId,
            ":sk": 'QUESTIONNAIRE#',
        }
    };

    try {
        return await docClient.query(params).promise();
    } catch (error) {
        throw error;
    }
}

module.exports = { del, create, show, update, get }