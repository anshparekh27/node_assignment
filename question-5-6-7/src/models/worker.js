const mongoose = require('mongoose');

// Define the schema for the worker collection
const workerSchema =  mongoose.Schema({
    WORKER_ID: { type: Number, required: true },
    FIRST_NAME: { type: String, required: true },
    LAST_NAME: { type: String, required: true },
    SALARY: { type: Number, required: true },
    JOINING_DATE: { type: Date, required: true },
    // DEPARTMENT: { type: String, required: true }
},{ collection: 'Worker' });

// Create and export the Worker model
const Worker= mongoose.model('Worker', workerSchema);
module.exports =Worker
