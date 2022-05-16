const getEventRequest = () => {
  return {
    pathParameters: 1,
    body: JSON.stringify({}),
    requestContext: {
      authorizer: {
        claims: {
          sub: '123'
        }
      }
    }
  };
}

module.exports = { getEventRequest }