import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineer",
      company: "RCS Tech",
      location: "Bangalore",
      duration: "01/2023 - Present",
      current: true,
      achievements: [
        "Developed a procurement & fixed asset management app using React, Node.js, and MongoDB, improving user efficiency by 30% and reducing workflow time by 20%",
        "Built RESTful APIs with Node.js/Express and optimized MongoDB queries, increasing data consistency by 25% and retrieval performance by 40%",
        "Implemented JWT-based authentication & role-based access control, safeguarding sensitive procurement and asset data",
        "Enhanced UI/UX with Tailwind CSS & Ionic 7, boosting mobile/web user satisfaction by 15%",
        "Reduced load times by 25% using lazy loading, memoization, and code splitting",
        "Led testing with Jest and React Testing Library achieving 70% coverage and cutting bugs by 30%",
        "Collaborated cross-functionally to deliver 100% of milestones on time in Agile sprints"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Ionic", "JWT", "Jest"]
    },
    {
      title: "Software Development Engineer",
      company: "Kora Systems",
      location: "Goa",
      duration: "02/2022 - 10/2022",
      current: false,
      achievements: [
        "Built a rental e-commerce frontend and admin dashboard with React & Chakra UI",
        "Improved order management flow by 20% and boosted user engagement by 25%",
        "Developed responsive interfaces that enhanced user experience across devices",
        "Collaborated with design team to implement modern UI/UX patterns"
      ],
      technologies: ["React", "Chakra UI", "JavaScript", "CSS3"]
    }
  ];

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of growth, impact, and continuous learning in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card hover:shadow-glow transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-foreground text-xl">
                            {experience.title}
                          </h3>
                          {experience.current && (
                            <Badge className="ml-3 bg-gradient-primary">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">•</span>
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-muted-foreground text-sm leading-relaxed">
                            <span className="text-primary mr-3 mt-1.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card className="glass-card p-6">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-semibold text-foreground text-lg mb-3">Education</h3>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Building className="h-4 w-4 mr-2" />
                  <span className="font-medium">Government Engineering College</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  Bachelor of Engineering - Computer Science & Engineering
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;