const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.DBURL);

const connection=mongoose.connection;
connection.on('error', () => {
    console.log('Error connecting to MongoDB');
});
connection.on('connected', () => {
    console.log('Connected to MongoDB');
    
});

module.exports = connection;