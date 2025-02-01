import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB:", process.env.MONGODB_URI);

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined. Check your .env file.");
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`\n MongoDB connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection Fail:", error.message);
        process.exit(1);
    }
};

export default connectDB;
