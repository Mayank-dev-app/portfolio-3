const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/Portfolio';

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