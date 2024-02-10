const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://shubham:hello@cluster0.6wssv.mongodb.net/?retryWrites=true&w=majority', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}` );
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Use process.exit(1) to indicate an error
    }
};

module.exports = connectDB;