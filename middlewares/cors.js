const cors = async (result) => {
    const body       = result.body;
    const statusCode = result.statusCode;
    const headers    = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    };

    return { statusCode, body, headers };
};

module.exports = cors;