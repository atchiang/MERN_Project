import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);

// why do we need an api? cannot just directly interact with database
// Endpoint is a combination of URL + HTTP method that lets client 
// interact with specific resources


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});

