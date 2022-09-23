require("dotenv").config();

const config = {
    db: {
        uri: process.env.MONGO_URI
    }
}

module.exports = config;