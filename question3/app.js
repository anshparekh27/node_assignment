import mongoose from "mongoose";

const url = "mongodb://localhost:27017/anshdb";
const collectionName = "users";

const schema = new mongoose.Schema({}, { strict: false });

const Model = mongoose.model(collectionName, schema);

async function connectAndRetrieve() {
  try {
    await mongoose.connect(url, {});
    console.log("Connection successful");

    // Retrieve all documents from the specified collection
    const documents = await Model.find({}).exec();

    console.log("Documents retrieved:", documents);

    if (documents.length === 0) {
      console.log("No documents found in the collection.");
    } else {
      console.log("Documents:", documents);
    }
  } catch (error) {
    console.error(
      "Error connecting to the database or retrieving documents:",
      error
    );
  } finally {
    await mongoose.disconnect();
  }
}

// Run the function
connectAndRetrieve();
