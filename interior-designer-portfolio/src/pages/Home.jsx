import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      id: 1,
      title: "Modern Apartment",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Luxury Villa",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Contemporary Office",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Space
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our portfolio of stunning interior design projects that bring spaces to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <motion.div
          {...fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest interior design projects, each crafted with precision and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={`/projects/${project.id}`} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-medium">View Project</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive interior design services tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Design",
                description: "Full-service interior design for residential and commercial spaces."
              },
              {
                title: "Space Planning",
                description: "Optimal layout design to maximize functionality and flow."
              },
              {
                title: "Project Management",
                description: "End-to-end project management from concept to completion."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 