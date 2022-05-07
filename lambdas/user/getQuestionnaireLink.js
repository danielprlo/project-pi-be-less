const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const {getCognitoSubId} = require("../../use_cases/cognito");

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const id = getCognitoSubId(event);

    const params = {
        TableName: 'StudyData',
        KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
        ExpressionAttributeNames:{
            "#pk": "pk",
            "#sk": "sk",
        },
        ExpressionAttributeValues: {
            ":pk": 'USERID#'+id,
            ":sk": 'QUESTIONNAIRE#',
        }
    };

    try {
        const questionnaire = await docClient.query(params).promise();
        console.log(questionnaire);
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