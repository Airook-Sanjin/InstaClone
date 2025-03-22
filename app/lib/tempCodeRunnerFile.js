const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI 
mongoose.connect(uri)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error:", err));