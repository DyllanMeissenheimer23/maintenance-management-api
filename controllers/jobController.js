// Import the Job model
const Job = require("../models/Job");

// Create a new maintenance job
const createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();

        res.status(201).json(job);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Get all maintenance jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ archived: false })
            .sort({ status: 1, createdAt: 1 });

        res.status(200).json(jobs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update a single job
const updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json(job);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Update multiple jobs
const batchUpdateJobs = async (req, res) => {
    try {

        const { jobIds, status } = req.body;

        const result = await Job.updateMany(
            { _id: { $in: jobIds } },
            { status: status }
        );

        res.status(200).json({
            message: "Jobs updated successfully",
            result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Archive a job
const archiveJob = async (req, res) => {
    try {

        const job = await Job.findByIdAndUpdate(
            req.params.id,
            { archived: true },
            { new: true }
        );

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json(job);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Filter jobs by status
const filterJobs = async (req, res) => {
    try {

        const jobs = await Job.find({
            status: req.params.status,
            archived: false
        }).sort({ createdAt: 1 });

        res.status(200).json(jobs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Export all controller functions
module.exports = {
    createJob,
    getJobs,
    updateJob,
    batchUpdateJobs,
    archiveJob,
    filterJobs
};