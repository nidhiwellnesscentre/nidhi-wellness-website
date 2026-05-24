import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import before1 from "../../imports/before1.jpeg";
import after1 from "../../imports/after1.jpeg";
import before2 from "../../imports/before2.jpeg";
import after2 from "../../imports/after2.jpeg";
import before3 from "../../imports/before3.jpeg";
import after3 from "../../imports/after3.jpeg";
import before4 from "../../imports/before4.jpeg";
import after4 from "../../imports/after4.jpeg"; 
export function Transformations() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  // Easy to add transformation images - just add objects to this array
  const transformations = [
    { 
      id: 1,
      // To add your transformation images, replace these placeholder URLs with your actual image imports
      // Example: import before1 from '../../imports/before1.png';
      // Then use: before: before1
      before: before1,
      after: after1,
      result: "Lost 20 kg in 3 months",
      testimonial: "I never thought weight loss could feel this manageable. Highly supportive team and great results."
    },
    {
      id: 2,
      before: before2,
      after: after2,
      result: "lost 7.8 kg in 1 month",
      testimonial: "The daily support kept me motivated throughout my journey!"
    },
    {
      id: 3,
      before: before3, 
      after: after3,
      result: "Lost 18 kg in 3 months",
      testimonial: "Lost weight without starving myself or doing extreme workouts. Truly life changing experience."
    },
    {
      id: 4,
      before: before4,
      after: after4,
      result: "Lost 10 kg in 2 months",
      testimonial: "Amazing experience! I lost inches, gained confidence, and built healthier habits."
    },
    // ADD MORE TRANSFORMATIONS HERE - just copy the format above
  ];


  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">
            Amazing Transformations
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real people
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredId(transformation.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="bg-green-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative">
                    <ImageWithFallback
                      src={transformation.before}
                      alt={`${transformation.result} - Before`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <ImageWithFallback
                      src={transformation.after}
                      alt={`${transformation.result} - After`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{
                    opacity: hoveredId === transformation.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 rounded-lg flex items-end justify-center p-6 pointer-events-none"
                >
                  <p className="text-white text-center text-lg">
                    "{transformation.testimonial}"
                  </p>
                </motion.div>
              </div>

              <div className="p-6 text-center">
                <p className="text-green-600 font-bold">
                  {transformation.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-700">
            Want to see similar results?{" "}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-green-600 hover:text-green-700 underline"
            >
              Contact us today!
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
