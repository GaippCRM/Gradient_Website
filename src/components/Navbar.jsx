import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Course Search',
      href: '/course-search',
    },
    {
      title: 'Countries',
      subLinks: [
        { label: 'UK', href: '/study-in-uk' },
        { label: 'Germany', href: '/study-in-germany' },
        { label: 'USA', href: '/study-in-usa' },
        { label: 'Australia', href: '/study-in-australia' },
        { label: 'Ireland', href: '/study-in-ireland' },
      ],
    },
    {
      title: 'Company',
      subLinks: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 top-0 left-0 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <img 
              src="/image/logo_second.png" 
              alt="Gradient Edu Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.subLinks && setOpenDropdown(item.title)}
                onMouseLeave={() => item.subLinks && setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link to={item.href} className="flex items-center text-[15px] font-medium text-[#2c3e50] hover:text-blue-600 transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  <button className="flex items-center text-[15px] font-medium text-[#2c3e50] hover:text-blue-600 transition-colors">
                    {item.title}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 text-gray-500 ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                )}

                <AnimatePresence>
                  {item.subLinks && openDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-6 w-[220px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] py-3 border border-gray-100 z-50"
                    >
                      {/* Invisible bridge to prevent mouse leave events when bridging gap */}
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

                      {item.subLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.href}
                          className="block px-6 py-[10px] text-[14px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="https://student.gradient-edu.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-[15px] text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium inline-flex items-center justify-center"
            >
              Login
            </a>
            <Link 
              to="/student-signup" 
              className="px-6 py-2.5 text-[15px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all font-medium inline-block text-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-3 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.title ? null : item.title)}
                        className="flex justify-between items-center w-full px-3 py-3 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md bg-transparent"
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={18} className={`transition-transform ${mobileExpanded === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {item.subLinks && mobileExpanded === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-gray-50/50 rounded-md"
                          >
                            {item.subLinks.map((link, idx) => (
                              <Link
                                key={idx}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              <div className="pt-4 flex flex-col space-y-3 px-3">
                <a
                  href="https://gestudent.gaipp.com/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3 text-[#2c3e50] border border-[#2c3e50] rounded-lg hover:bg-gray-50 transition-colors font-medium flex justify-center items-center text-center"
                >
                  Login
                </a>
                <Link
                  to="/student-signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transition-all font-medium flex justify-center items-center text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
