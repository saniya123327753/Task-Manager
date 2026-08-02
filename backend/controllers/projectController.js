const Project = require("../models/Project");

const createProject = async(req, res) => {
    try {
        const { name, description, members } = req.body;

        const project = await Project.create({
            name,
            description,
            members: members || [],
            createdBy: req.user.id,
        });

        res.status(201).json({
            message: "Project created successfully",
            project,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

const getProjects = async(req, res) => {
    try {
        const projects = await Project.find().populate("createdBy", "name email role");
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

module.exports = { createProject, getProjects };