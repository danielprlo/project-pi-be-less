const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
AWS.config.update({ region: 'eu-west-1' });

const get = async() => {
  const params = {
    TableName: 'StudyData',
    KeyConditionExpression: '#pk = :pk',
    ExpressionAttributeNames:{
      "#pk": "pk",
    },
    ExpressionAttributeValues: {
      ":pk": "QUESTIONTYPE",
    }
  }

  try {
    return await docClient.query(params).promise();
  } catch (error) {
    throw error;
  }
}

module.exports = { get }