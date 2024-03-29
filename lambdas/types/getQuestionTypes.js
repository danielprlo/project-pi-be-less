const cors = require('../../middlewares/cors');
const { getTypes } = require("../../use_cases/questionTypes");

const handlerFunction = async (event, context) => {
    try {
        const data = await getTypes();
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