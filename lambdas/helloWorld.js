const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
AWS.config.update({region: 'eu-west-1'});

const handlerFunction = async (event, context) => {
    return "Hello world";
}

exports.handler = async (event, context) => {
    return await handlerFunction(event, context);
};