import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Download, Mail, ArrowDown, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../../public/assets/profile.jpg';

const Hero = () => {
  // Configuration constants
  const PROFILE_IMAGE_SRC = profileImage;
  const PROFILE_ALT = "Sarvesh Talekar - Full Stack Developer";

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sarvesh_Talekar_Resume.pdf';
    link.download = 'Sarvesh_Talekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg pt-20 md:pt-24 lg:pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Hero Content Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 lg:justify-start lg:ml-8">

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0 order-1 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <motion.img
                  src={PROFILE_IMAGE_SRC}
                  alt={PROFILE_ALT}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:border-primary-glow group-hover:shadow-glow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback Avatar */}
                <div className="hidden absolute inset-0 bg-surface border-4 border-primary rounded-full items-center justify-center">
                  <User className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground mb-4">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="block gradient-text">Sarvesh Talekar</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
              >
                <span className="block mb-2">Full-Stack Engineer | React • Node.js • MongoDB • SQL</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-12 max-w-2xl lg:max-w-none leading-relaxed"
              >
                Full Stack Developer with 3.5 years of experience building scalable MERN applications.
                Passionate about delivering solutions that improve efficiency and enhance user experience.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              >
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-base font-medium"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>

                <Button
                  onClick={handleContactClick}
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary hover:bg-surface-hover transition-all duration-300 px-8 py-3 text-base font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <motion.a
                  href="https://github.com/SarveshTalekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sarvesh-talekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;