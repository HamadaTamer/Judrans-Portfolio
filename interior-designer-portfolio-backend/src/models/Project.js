import mongoose from 'mongoose';

const panoramaViewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
  images: [{
    type: String,
    required: true
  }],
  panoramaViews: [panoramaViewSchema],
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
    client: String,
    duration: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', projectSchema); 