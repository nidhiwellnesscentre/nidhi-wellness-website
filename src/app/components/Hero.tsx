import { motion } from 'motion/react';
import logo from '../../imports/WhatsApp_Image_2026-05-20_at_11.18.03_PM-removebg-preview-6.png';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block mb-6"
            >
              <img src={logo} alt="Nidhi Wellness Logo" className="h-24 md:h-32 w-auto mx-auto" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl mb-6 text-green-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nidhi Wellness & Nutrition Centre
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform Your Life with Expert Guidance in Fitness, Nutrition & Wellness
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700">
              We help you gain or lose weight with personalized plans
            </p>
            <p className="text-2xl text-green-600">
              100% FREE - No Charges for Workouts, Daily Check-ins & BMI Reports
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-8 py-4 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
