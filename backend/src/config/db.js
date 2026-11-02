import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log("Error connecting to database\n", error);
        process.exit(1);
    }
}