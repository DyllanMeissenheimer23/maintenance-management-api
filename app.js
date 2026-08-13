// Import required packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");

// Create Express application
const app = express();

// Enable JSON
app.use(express.json());

// Define the port
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed:", error);
    });

// Register routes
app.use("/", jobRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Maintenance Management App is running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});