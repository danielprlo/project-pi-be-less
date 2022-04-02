const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const id = event.pathParameters.id;
    const params = {
        TableName: 'StudyData',
        Key: {
            'pk': 'USER#1',
            'sk': 'QUESTIONNAIRE#'+id,
        }
    };

    try {
        const data = await docClient.get(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (error) {
        return {
            statusCode: 400,
            error: `Could not query: ${error.stack}`
        };
    }
};

exports.handler = async (event, context) => {
    return cors(await handlerFunction(event, context));
};