import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  // This will be replaced with actual data from the backend later
  const projects = [
    {
      id: 1,
      title: "Modern Apartment",
      description: "A contemporary living space with minimalist design",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
      panoramaViews: [
        {
          title: "Living Room",
          url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOJMWEE1JHA&utm_source=pano_share",
        },
        {
          title: "Kitchen",
          url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=EXAMPLE2",
        }
      ]
    },
    {
      id: 2,
      title: "Luxury Villa",
      description: "Elegant design with premium finishes",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
      panoramaViews: [
        {
          title: "Master Bedroom",
          url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=EXAMPLE3",
        }
      ]
    },
    {
      id: 3,
      title: "Cozy Studio",
      description: "Smart space utilization for small apartments",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      panoramaViews: [
        {
          title: "Studio Overview",
          url: "https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=EXAMPLE4",
        }
      ]
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of carefully crafted interior design projects,
            each reflecting our commitment to excellence and attention to detail.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-w-16 aspect-h-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-medium">
                        View Details {project.panoramaViews?.length > 0 && '• 360° Available'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-beige-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 