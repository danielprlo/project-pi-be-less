const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const id = event.pathParameters.id;

    try {
        // Questions
        const Qparams = {
            TableName: 'StudyData',
            KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
            ExpressionAttributeNames:{
                "#pk": "pk",
                "#sk": 'sk',
            },
            ExpressionAttributeValues: {
                ":pk": "QUESTIONNAIRE#"+id,
                ":sk": "QUESTION#",
            }
        };

        const questions = await docClient.query(Qparams).promise();

        if (questions.Items) {
            questions.Items.forEach(async function(element) {
                var toDeleteParams = {
                    TableName: 'StudiesData',
                    Key: {
                        pk: element.pk,
                        sk: element.sk,
                    }
                };
                await docClient.delete(toDeleteParams).promise();
            });
        }

        const del = {
            TableName: 'StudiesData',
            Key: {
                ":pk": "QUESTIONNAIRE#"+id,
                ":sk": 'QUESTIONNAIRE',
            }
        };

        await docClient.delete(del).promise();
        return { statusCode: 200, body: "Done" };
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