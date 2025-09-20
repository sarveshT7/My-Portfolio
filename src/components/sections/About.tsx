import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Code, Database, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const highlights = [
    {
      icon: Code,
      title: "Frontend Excellence",
      description: "Expert in React, Next.js, and modern JavaScript frameworks with a focus on performance and user experience."
    },
    {
      icon: Database,
      title: "Full Stack Proficiency",
      description: "Comprehensive MERN stack development with MongoDB, Express.js, React, and Node.js expertise."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Proven track record of improving efficiency by 30% and reducing workflow times by 20% through optimization."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge technology and user needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Full Stack Developer with over 3+ years of experience specializing in the MERN stack. 
                  My journey in software development has been focused on creating scalable applications that 
                  solve real-world problems across various domains including procurement, asset management, 
                  and e-commerce.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently at RCS Tech, I've contributed to developing <strong className="text-foreground">Traxx v12</strong>, 
                  a comprehensive asset management solution that provides real-time asset visibility for organizations. 
                  My work has resulted in a 30% improvement in user efficiency and a 20% reduction in workflow time.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about performance optimization, having successfully reduced load times by 25% 
                  through techniques like lazy loading, memoization, and code splitting. My experience includes 
                  implementing robust authentication systems, optimizing database queries, and leading testing 
                  initiatives that achieved 70% coverage while reducing bugs by 30%.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <highlight.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;