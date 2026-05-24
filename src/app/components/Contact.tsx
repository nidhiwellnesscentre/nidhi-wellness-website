import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyAndCall = async (phoneNumber: string) => {
    await navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(phoneNumber);
    setTimeout(() => setCopiedPhone(null), 2000);
    window.location.href = `tel:${phoneNumber}`;
    toast.success('Phone number copied!');
  };

  const handleCopyAndEmail = async () => {
    const email = 'nidhiwellnesscentre@gmail.com';
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    window.location.href = `mailto:${email}`;
    toast.success('Email copied!');
  };

  const handleOpenMaps = () => {
    const address = 'Ganesh Nagar, Wadgoansheri, Pune, Maharashtra, India';
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get your form ID by signing up at https://formspree.io/
      const response = await fetch('https://formspree.io/f/xbdbydwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try calling or emailing us directly.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try calling or emailing us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600">Start your transformation journey today</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-gray-800">Contact Information</h3>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="text-green-600 mr-3" size={24} />
                  <span className="text-lg text-gray-700">Phone</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyAndCall('9890238208')}
                  className="block w-full text-left ml-9 mb-2 text-green-600 hover:text-green-700 flex items-center justify-between bg-white p-3 rounded-lg shadow"
                >
                  <span>+91 9890238208</span>
                  {copiedPhone === '9890238208' ? <Check size={18} /> : <Copy size={18} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopyAndCall('7020779318')}
                  className="block w-full text-left ml-9 text-green-600 hover:text-green-700 flex items-center justify-between bg-white p-3 rounded-lg shadow"
                >
                  <span>+91 7020779318</span>
                  {copiedPhone === '7020779318' ? <Check size={18} /> : <Copy size={18} />}
                </motion.button>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="text-green-600 mr-3" size={24} />
                  <span className="text-lg text-gray-700">Email</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyAndEmail}
                  className="block w-full text-left ml-9 text-green-600 hover:text-green-700 flex items-center justify-between bg-white p-3 rounded-lg shadow"
                >
                  <span>nidhiwellnesscentre@gmail.com</span>
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </motion.button>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-green-600 mr-3" size={24} />
                  <span className="text-lg text-gray-700">Location</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpenMaps}
                  className="block w-full text-left ml-9 text-green-600 hover:text-green-700 bg-white p-3 rounded-lg shadow"
                >
                  Ganesh Nagar, Wadgoansheri, Pune, Maharashtra, India
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-6 text-gray-800">Send us a message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Goal *</label>
                  <select
                    required
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="weight-gain">Weight Gain</option>
                    <option value="fitness">General Fitness</option>
                    <option value="nutrition">Nutrition Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
<motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl"
            >
              <h4 className="mb-3 text-gray-900">What Happens Next?</h4>
              <ul className="space-y-2 text-gray-600">
                {[
                  "We'll contact you within 24 hours to discuss your goals",
                  'Get a personalized fitness and nutrition plan',
                  'Start your transformation with daily support',
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-emerald-600 mt-1">{index + 1}.</span>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
