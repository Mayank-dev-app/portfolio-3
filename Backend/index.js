const express = require('express');
require('./Controller/dbConfig');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ['POST', 'GET', 'DELETE'],
  credentials: true
}));

app.use("/user/", require('./Controller/login')); // ✅ make sure this exports Router

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});
