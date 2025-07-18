const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoUrl = process.env.MongoULR;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Database Successfully Connected");
});

db.on('disconnected', () => {
    console.log("Database is Disconnected");
});

db.on('error', () => {
    console.log("Database connection have some error : ", error);
});

module.exports = db;