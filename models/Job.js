// Import Mongoose
const mongoose = require("mongoose");

// Create the Job Schema
const jobSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },
    status: {
        type: String,
        enum: ["Submitted", "In Progress", "Completed"],
        default: "Submitted"
    },
    archived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Create the Job Model
const Job = mongoose.model("Job", jobSchema);

// Export the model
module.exports = Job;