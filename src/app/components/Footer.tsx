import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';
import logo from '../../imports/WhatsApp_Image_2026-05-20_at_11.18.03_PM-removebg-preview-6.png';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              Nidhi Wellness & Nutrition Centre
            </h3>
            <p className="text-gray-300">
              Transforming lives through proper exercise, diet, and nutrition.
              Your journey to better health starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Transformations', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/nidhiwellnesscenter_official?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href=""
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Nidhi Wellness & Nutrition Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
