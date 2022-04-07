const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.MONGO_URI

const connectToDB = async () => {
  mongoose.connect(db,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB Database')
    });
}

module.exports = connectToDB
