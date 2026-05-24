import { motion } from 'motion/react';
import { Heart, Users, Target, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Daily check-ins to ensure you stay on track with your fitness goals'
    },
    {
      icon: Users,
      title: 'Online & Offline',
      description: 'Flexible workout options - train with us online or visit our center'
    },
    {
      icon: Target,
      title: 'Guaranteed Results',
      description: 'We guarantee weight gain or loss with our proven methods'
    },
    {
      icon: Award,
      title: 'Completely Free',
      description: 'No charges for workouts, diet plans, check-ins, or monthly BMI reports'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Nidhi Wellness & Nutrition Centre, we're dedicated to helping you achieve your fitness goals
            through proper exercise, diet, and nutrition. Our comprehensive support system ensures you
            never feel alone on your journey to better health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-green-50 p-6 rounded-lg text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <Icon size={48} className="text-green-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
