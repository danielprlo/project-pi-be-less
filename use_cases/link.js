const generateLinkFromHash = (hash) => {
    return 'http://localhost:8081/fill-questionnaire/'+hash;
}

module.exports = { generateLinkFromHash }