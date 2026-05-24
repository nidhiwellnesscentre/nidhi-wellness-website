import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../imports/WhatsApp_Image_2026-05-20_at_11.18.03_PM-removebg-preview-4.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="Nidhi Wellness Logo"
                  className="w-14 h-14 object-contain"
                />
              </motion.div>

              <div>
                <motion.h1
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500"
                  style={{ fontSize: '1.25rem', lineHeight: '1.2', margin: 0 }}
                >
                  Nidhi Wellness
                </motion.h1>
                <p className="text-gray-600" style={{ fontSize: '0.75rem', margin: 0 }}>
                  & Nutrition Centre
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    bgcolor: 'rgb(16, 185, 129)',
                    '&:hover': { bgcolor: 'rgb(5, 150, 105)' },
                    textTransform: 'none',
                    px: 3,
                    borderRadius: '0.75rem'
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 md:hidden bg-white"
            style={{ top: '80px' }}
          >
            <nav className="flex flex-col gap-4 p-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-emerald-600 py-3 border-b border-gray-100"
                >
                  {item.label}
                </motion.button>
              ))}

              <Button
                variant="contained"
                fullWidth
                onClick={() => scrollToSection('contact')}
                sx={{
                  bgcolor: 'rgb(16, 185, 129)',
                  '&:hover': { bgcolor: 'rgb(5, 150, 105)' },
                  textTransform: 'none',
                  py: 1.5,
                  mt: 2
                }}
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
