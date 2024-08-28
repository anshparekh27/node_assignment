const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mongo_task';

async function connectToDatabase() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // List collections
        await listCollections();
        
        // Event listeners for connection status
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from MongoDB');
        });
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function listCollections() {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Collections in the database:');
        collections.forEach((collection) => {
            console.log(`- ${collection.name}`);
        });
    } catch (error) {
        console.error('Error listing collections:', error);
    }
}

module.exports = connectToDatabase;
