const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI 
const dbConnect = async() => {
    if(mongoose.connection.readyState >= 1){
        return;
    }

    return mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error:", err));
}
    // Define Schema and Model


// const User = mongoose.model("User", NewUserSchema);

// // Insert Data
// const addUser = async () => {
//     const user = new User({ email:"" ,user:"" , password:"" });
//     await user.save();
//     console.log("User added:", user);
// };

// // Fetch Data
// const getUsers = async () => {
//     const users = await User.find();
//     console.log("Users:", users);
// };

// Run Functions
// addUser("puumo@cuju.cm","JOHN LENNON","THIS IS MY PASSWORD");
// getUsers();
module.exports = dbConnect