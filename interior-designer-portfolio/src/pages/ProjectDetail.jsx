import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedPanorama, setSelectedPanorama] = useState(null);
  
  // This will be replaced with actual data from the backend later
  const project = {
    id: 1,
    title: "Modern Apartment",
    description: "A contemporary living space with minimalist design that combines functionality with aesthetic appeal. Each room has been carefully designed to maximize space and natural light.",
    category: "Residential",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    ],
    panoramaViews: [
      {
        title: "Living Room",
        url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOJMWEE1JHA&utm_source=pano_share",
      },
      {
        title: "Kitchen",
        url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=EXAMPLE2",
      }
    ],
    details: {
      location: "Downtown",
      area: "1200 sq ft",
      year: "2023",
      client: "Private Residence",
      duration: "3 months",
    },
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{project.description}</p>
            </div>

            {/* 360° Views Section */}
            {project.panoramaViews && project.panoramaViews.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">360° Virtual Tour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.panoramaViews.map((view, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <button
                        onClick={() => setSelectedPanorama(view)}
                        className="w-full bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-beige-100 rounded-full p-2">
                            <svg
                              className="w-6 h-6 text-beige-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">{view.title}</h3>
                            <p className="text-sm text-gray-500">View 360° Tour</p>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Project Details</h2>
              <div className="space-y-4">
                {Object.entries(project.details).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 360° Viewer Modal */}
      {selectedPanorama && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-7xl mx-auto p-4">
            <button
              onClick={() => setSelectedPanorama(null)}
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={selectedPanorama.url}
              title={`360° View - ${selectedPanorama.title}`}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail; 