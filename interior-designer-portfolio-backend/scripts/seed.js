import mongoose from 'mongoose';
import Project from '../models/Project.js';
import dotenv from 'dotenv';

dotenv.config();

const dummyProjects = [
  {
    title: "Luxury Villa Renovation",
    description: "Complete renovation of a 5-bedroom luxury villa with modern amenities and sustainable design elements.",
    category: "Residential",
    details: {
      location: "Dubai Hills",
      area: "4500 sq ft",
      year: "2023",
      client: "Private Client",
      duration: "6 months"
    },
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&auto=format&fit=crop&q=60"
    ],
    panoramaViews: [
      "https://example.com/panorama1",
      "https://example.com/panorama2"
    ]
  },
  {
    title: "Modern Office Space",
    description: "Contemporary office design for a tech startup, featuring open spaces and collaborative work areas.",
    category: "Commercial",
    details: {
      location: "Business Bay",
      area: "3000 sq ft",
      year: "2023",
      client: "TechStart Inc.",
      duration: "4 months"
    },
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60"
    ],
    panoramaViews: [
      "https://example.com/panorama3"
    ]
  },
  {
    title: "Beachfront Apartment",
    description: "Elegant interior design for a beachfront apartment with panoramic sea views.",
    category: "Residential",
    details: {
      location: "Palm Jumeirah",
      area: "2500 sq ft",
      year: "2022",
      client: "Private Client",
      duration: "3 months"
    },
    images: [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60"
    ],
    panoramaViews: [
      "https://example.com/panorama4"
    ]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new data
    await Project.insertMany(dummyProjects);
    console.log('Inserted dummy projects');

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 