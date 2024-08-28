import mongoose from 'mongoose';

export default async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/latest_db', {
           
        });
        console.log('Connection successful');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
