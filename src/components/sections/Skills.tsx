import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiRedux,
  SiIonic,
  SiJest,
  SiPostman,
  SiMysql,
  SiJsonwebtokens,
  SiChakraui,
  SiBitbucket
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiRedis } from "react-icons/di";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Ionic", icon: SiIonic, color: "#3880FF" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Chakra UI", icon: SiChakraui , color: "#319795" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL", icon: SiMysql, color: "#F29111" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#00D084" },
        { name: "Redis", icon: DiRedis , color: "#DC382D" },
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Bitbucket", icon: SiBitbucket , color: "#FF6C37" },
        { name: "Jest", icon: SiJest, color: "#C21325" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-surface/30">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        rotateY: 5
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                    >
                      <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 group cursor-pointer">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="relative">
                            <skill.icon
                              className="h-8 w-8 transition-all duration-300 group-hover:scale-110"
                              style={{ color: skill.color }}
                            />
                            <div
                              className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                              style={{ backgroundColor: skill.color }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;