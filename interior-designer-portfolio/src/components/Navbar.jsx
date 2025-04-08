import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/admin', label: 'Admin' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-white/10 backdrop-blur-sm border-b border-white/20 py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-2xl font-bold ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
          >
            Interior Design
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute left-0 right-0 h-0.5 ${
                      isScrolled || !isHomePage ? 'bg-gray-900' : 'bg-white'
                    }`}
                    style={{ bottom: '-4px' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 relative ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}>
              <span
                className={`block absolute h-0.5 w-full transition-transform duration-300 ${
                  isScrolled || !isHomePage ? 'bg-gray-900' : 'bg-white'
                } ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}
              />
              <span
                className={`block absolute h-0.5 w-full top-3 ${
                  isScrolled || !isHomePage ? 'bg-gray-900' : 'bg-white'
                } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block absolute h-0.5 w-full transition-transform duration-300 ${
                  isScrolled || !isHomePage ? 'bg-gray-900' : 'bg-white'
                } ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg ${
                      isScrolled || !isHomePage
                        ? 'text-gray-600 hover:text-gray-900' 
                        : 'text-white hover:text-gray-200'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 