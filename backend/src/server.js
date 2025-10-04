import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dontenv from "dotenv"

dontenv.config();

console.log(process.env.MONGO_URI123);

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

// why do we need an api? cannot just directly interact with database
// Endpoint is a combination of URL + HTTP method that lets client 
// interact with specific resources


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
