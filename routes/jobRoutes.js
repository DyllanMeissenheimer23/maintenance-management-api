// Import Express
const express = require("express");

// Create a router
const router = express.Router();

// Import the controller
const jobController = require("../controllers/jobController");

// Create a new job
router.post("/jobs", jobController.createJob);

// Get all jobs
router.get("/jobs", jobController.getJobs);

// Update multiple jobs (must come before /jobs/:id)
router.put("/jobs/batch", jobController.batchUpdateJobs);

// Archive a job (must also come before /jobs/:id)
router.put("/jobs/archive/:id", jobController.archiveJob);

// Filter jobs by status
router.get("/jobs/status/:status", jobController.filterJobs);

// Update a single job (keep this LAST)
router.put("/jobs/:id", jobController.updateJob);

// Export the router
module.exports = router;