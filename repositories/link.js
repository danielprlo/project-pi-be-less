const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
AWS.config.update({ region: 'eu-west-1' });

const save = async (questionnaireId, userId) => {
  const params = {
    TableName: 'StudyData',
    Item: {
      pk: 'LINK#'+questionnaireId,
      sk: 'USER#'+userId,
    },
    ReturnValues: 'ALL_OLD',
  };

  try {
    return await docClient.put(params).promise();
  } catch (error) {
    throw error;
  }
}

const get = async(questionnaireId) => {
  console.log('da linkquery', "LINK#"+questionnaireId)
  const params = {
    TableName: 'StudyData',
    KeyConditionExpression: '#pk = :pk',
    ExpressionAttributeNames:{
      "#pk": "pk",
    },
    ExpressionAttributeValues: {
      ":pk": "LINK#"+questionnaireId,
    }
  }

  try {
    return await docClient.get(params).promise();
  } catch (error) {
    throw error;
  }
}

module.exports = { save, get }