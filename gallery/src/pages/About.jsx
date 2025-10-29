import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div
        style={{ minHeight: "92vh" }}
        className="relative py-20 px-6 max-w-6xl mx-auto text-white flex flex-col justify-center overflow-hidden"
      >
        {/* Soft Gradient Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-black to-pink-800/20 blur-3xl -z-10" />

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Event Management
        </motion.h1>

        {/* Section Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-purple-500/10 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.p
            className="mb-6 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome to our premier photo and gallery event management platform. 
            We specialize in curating and managing unforgettable events that 
            capture the essence of your vision. Our team of experienced 
            professionals is dedicated to providing exceptional service, ensuring 
            every detail is perfect, and making your event truly memorable.
          </motion.p>

          <motion.p
            className="mb-6 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Our mission is to help clients create stunning visual experiences 
            through expert advice, personalized service, and a refined artistic 
            vision. From private gallery showcases to large corporate events, 
            we’re here to transform ideas into captivating realities.
          </motion.p>

          <motion.p
            className="mb-6 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            We collaborate with talented photographers, artists, and planners 
            who excel at crafting extraordinary visual stories. Together, we 
            ensure your event radiates creativity, elegance, and impact.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
