const getCognitoSubId = (event) => {
    return event.requestContext.authorizer.claims.sub;
}

module.exports = { getCognitoSubId }