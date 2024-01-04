import express from "express";

const app = express();

// Set up the static folder for serving static files like images, stylesheets, and scripts
app.use(express.static("public"));

// Parse incoming URL-encoded bodies (data from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON bodies (data from API clients)
app.use(express.json());

// Start the server and listen for incoming requests
// Use the PORT environment variable if available, otherwise default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server started on port", port);
});