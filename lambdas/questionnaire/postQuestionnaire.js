const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const uuid = require('uuid');
const { getCognitoSubId } = require('../../use_cases/cognito')

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const questionnaireId = uuid.v4();
    const userId = getCognitoSubId(event);
    const parsedBody = JSON.parse(event.body);

    const params = {
        TableName: 'StudyData',
        Item: {
            pk: 'USER#'+userId,
            sk: 'QUESTIONNAIRE#'+questionnaireId,
            name: parsedBody.name,
            description: parsedBody.description
        },
        ReturnValues: 'ALL_OLD',
    };

    try {
        const data = await docClient.put(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (error) {
        return {
            statusCode: 400,
            body: `Could not query: ${error.stack}`
        };
    }
};

exports.handler = async (event, context) => {
    return cors(await handlerFunction(event, context));
};