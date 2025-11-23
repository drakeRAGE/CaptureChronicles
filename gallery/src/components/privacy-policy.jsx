import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import PropTypes from "prop-types";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ minHeight: "92vh" }}
        className="relative py-20 px-6 max-w-6xl mx-auto text-white flex flex-col justify-center overflow-hidden"
      >
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-black to-pink-800/30 blur-3xl -z-10" />

        {/* Back Arrow Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-3xl text-pink-400 hover:text-pink-300 transition-transform duration-300 hover:scale-110"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          ←
        </motion.button>

        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        {/* Policy Container */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-pink-500/10 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.p
            className="mb-6 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Welcome to <strong>Event Management</strong>. Your trust matters to us. 
            This Privacy Policy explains how we collect, use, and protect your personal information 
            when you interact with our website, services, or digital platforms.
          </motion.p>

          <Section
            delay={0.6}
            title="Information We Collect"
            content="We may collect personal details such as your name, email address, and contact information when you register, make an inquiry, or interact with our services. Additionally, we may collect non-personal data such as browser type, device information, and usage statistics to improve user experience."
          />

          <Section
            delay={0.8}
            title="How We Use Your Information"
            content="We use your information to provide and enhance our services, communicate with you about updates or offers, and ensure a personalized experience. We do not sell, rent, or share your data with unauthorized third parties."
          />

          <Section
            delay={1.0}
            title="Data Protection & Security"
            content="We employ advanced encryption, firewalls, and secure servers to protect your personal information from unauthorized access or misuse. While we strive to maintain top-tier security, please note that no online platform can guarantee 100% safety."
          />

          <Section
            delay={1.2}
            title="Cookies & Tracking Technologies"
            content="Our website may use cookies and similar technologies to enhance user experience and analyze traffic. You can choose to disable cookies in your browser settings; however, some features of the site may not function as intended."
          />

          <Section
            delay={1.4}
            title="Your Rights & Choices"
            content="You have the right to access, update, or delete your personal information. If you wish to make any such requests, please contact us directly using the information below."
          />

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              Contact Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you have any questions about our Privacy Policy or wish to exercise your data rights,
              please reach out to us at{" "}
              <a
                href="/contact"
                className="text-pink-400 underline hover:text-pink-300 transition-colors"
              >
                contact us
              </a>.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
function Section({ title, content, delay }) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h2>
      <p className="text-lg text-gray-300 leading-relaxed">{content}</p>
    </motion.div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
