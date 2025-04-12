import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Residential', 'Commercial', 'Office', 'Other']
  },
  details: {
    location: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    client: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  },
  images: [{
    type: String,
    required: true
  }],
  panoramaViews: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project; 