const AWS = require("aws-sdk");
const cors = require('../../middlewares/cors');
const { getCognitoSubId } = require('../../use_cases/cognito')
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    const id = getCognitoSubId(event);

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

        // Delete questionnaire from users
        const params = {
            TableName: 'StudyData',
            Key: {
                pk: 'USERID#'+id,
                sk: 'QUESTIONNAIRE#'+questionnaireId,
            }
        };

        try {
            await docClient.delete(params).promise();
        } catch (error) {
            return {
                statusCode: 400,
                body: `Could not query: ${error.stack}`
            };
        }

        return { statusCode: 200, body: "Done" };
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