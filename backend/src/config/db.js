const mongoose = require("mongoose")

const dbConnect = () => {
    try {
        mongoose.connect(process.env.URL_DATABASE)
        return mongoose.connection;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConnect