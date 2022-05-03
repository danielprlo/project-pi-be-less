const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const cors = require('../../middlewares/cors');

AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const userId = "12345";
    const params = {
        TableName: 'StudyData',
        KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
        ExpressionAttributeNames:{
            "#pk": "pk",
            "#sk": 'sk'
        },
        ExpressionAttributeValues: {
            ":pk": "USER#"+userId,
            ":sk": "QUESTIONNAIRE#"
        }
    }

    try {
        const data = await docClient.query(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (error) {
        return {
            statusCode: 400,
            body: `Could not query: ${error.stack}`
        };
    }
}

exports.handler = async (event, context) => {
    return cors(await handlerFunction(event, context));
};