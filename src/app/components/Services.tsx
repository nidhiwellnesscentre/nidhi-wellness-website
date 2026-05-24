import { motion } from 'motion/react';
import { Activity, Apple, Clipboard, TrendingUp } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Activity,
      title: 'Exercise Programs',
      description: 'Customized workout plans tailored to your fitness level and goals, available both online and offline'
    },
    {
      icon: Apple,
      title: 'Diet & Nutrition',
      description: 'Personalized meal plans and nutritional guidance to support your weight management journey'
    },
    {
      icon: Clipboard,
      title: 'Daily Check-ins',
      description: 'Regular monitoring and support to track your progress and address any challenges you face'
    },
    {
      icon: TrendingUp,
      title: 'Monthly BMI Reports',
      description: 'Comprehensive monthly reports to track your body composition and celebrate your progress'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Our Services</h2>
          <p className="text-xl text-gray-600">Everything you need for a successful transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={56} className="text-green-600 mb-4" />
                </motion.div>
                <h3 className="text-2xl mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
