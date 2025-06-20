




import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'craftsmanship', label: 'Craftsmanship' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSetActive = (to) => {
    setActiveLink(to);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-yellow-100 py-4'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className="text-2xl font-bold text-amber-600 flex items-center cursor-pointer"
              onClick={() => handleSetActive('home')}
            >
              <span className="bg-amber-600 text-white px-2 py-1 rounded mr-2">XYZ</span>
              <span className="hidden sm:inline">Bats</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                to={link.id} 
                smooth={true} 
                duration={500}
                spy={true}
                onSetActive={handleSetActive}
                className={`relative cursor-pointer transition-colors ${activeLink === link.id ? 'text-amber-600 font-medium' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {link.label}
                {activeLink === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Cart Icon with badge */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer text-gray-700 hover:text-amber-600 ml-4"
            >
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden mt-4 ${scrolled ? 'bg-white' : 'bg-gray-50'} rounded-lg shadow-lg`}
            >
              <div className="px-4 py-2 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.id}
                    to={link.id} 
                    smooth={true} 
                    duration={500}
                    spy={true}
                    onSetActive={handleSetActive}
                    className={`block px-4 py-2 rounded-lg transition-colors ${activeLink === link.id ? 'bg-amber-100 text-amber-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center px-4 py-2 text-gray-700">
                  <FiShoppingCart className="w-5 h-5 mr-3" />
                  Cart <span className="ml-2 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;