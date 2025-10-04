import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://atchiang_db_user:testpassword@cluster0.dug2b0r.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1); // exit with failure
    }
}