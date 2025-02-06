const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

module.exports = connectToDB;
