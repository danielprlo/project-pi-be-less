const typeRepository = require("../repositories/type");

const getTypes = async() => {
    try {
        return await typeRepository.get();
    } catch (error) {
        throw error;
    }
}

module.exports = { getTypes }