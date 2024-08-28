// const mongoose = require('mongoose');

// // Define the schema for the bonus collection
// const bonusSchema = new mongoose.Schema({
//     WORKER_REF_ID: { type: Number, required: true },
//     BONUS_AMOUNT: { type: Number, required: true },
//     BONUS_DATE: { type: Date, required: true }
// });

// // Create and export the Bonus model
// module.exports = mongoose.model('Bonus', bonusSchema);

const mongoose = require('mongoose');

// Define a schema with strict mode disabled
const bonusSchema = new mongoose.Schema({}, { strict: false });

// Create and export the Bonus model
module.exports = mongoose.model('Bonus', bonusSchema);
