import express from 'express';
import { body } from 'express-validator';
import Project from '../models/Project.js';
import { authenticateToken } from '../middleware/auth.js';
import { validateRequest } from '../middleware/validate.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create project (protected route)
router.post('/',
  authenticateToken,
  [
    body('title').notEmpty().trim(),
    body('description').notEmpty().trim(),
    body('category').isIn(['Residential', 'Commercial', 'Office', 'Other']),
    body('images').isArray().notEmpty(),
    body('details.location').notEmpty().trim(),
    body('details.area').notEmpty().trim(),
    body('details.year').notEmpty().trim(),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const project = new Project(req.body);
      const savedProject = await project.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Update project (protected route)
router.patch('/:id',
  authenticateToken,
  async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      Object.assign(project, req.body);
      const updatedProject = await project.save();
      res.json(updatedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Delete project (protected route)
router.delete('/:id',
  authenticateToken,
  async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      await project.remove();
      res.json({ message: 'Project deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

export default router; 