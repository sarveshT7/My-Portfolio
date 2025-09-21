import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Traxx v12 - Asset Management Solution",
      description: "A comprehensive fixed asset management application enabling organizations to track and manage assets with real-time visibility. Enhanced UI/UX and backend APIs to streamline asset lifecycle workflows including allocation, movement, and depreciation tracking.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      features: [
        "Real-time asset tracking and visibility",
        "Role-based access control for secure operations",
        "Scalable MongoDB schema for asset records",
        "Streamlined asset lifecycle workflows"
      ],
      // github: "#",
      // demo: "#",
      impact: "Improved user efficiency by 30%"
    },
    {
      title: "Rentity - E-commerce Platform",
      description: "Full-featured rental e-commerce frontend with comprehensive cart functionality, inventory management, and vendor admin UI. Built with modern React patterns and responsive design principles.",
      techStack: ["React", "Chakra UI", "JavaScript"],
      features: [
        "Complete rental e-commerce frontend",
        "Advanced cart and inventory management",
        "Responsive vendor admin interface",
        "Dynamic user interfaces"
      ],
      // github: "#",
      // demo: "#",
      impact: "Increased sales conversion by 15%"
    },
    {
      title: "Project Management App",
      description: "Currently developing a comprehensive project management solution with modular, responsive UI for Dashboard, Analytics, Projects, and Teams. Features modern authentication and state management.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "MongoDB"],
      features: [
        "Modular dashboard with analytics",
        "JWT authentication with email verification",
        "Redux Toolkit state management",
        "Planned: Kanban boards, real-time chat, notifications"
      ],
      github: "https://github.com/sarveshT7/Project-Management",
      demo: "https://project-management-dun-psi.vercel.app/",
      impact: "In Progress",
      isInProgress: true
    },
    {
      title: "check-env-sarvesh (NPM Package)",
      description: "A lightweight npm package designed to validate environment variables in Node.js applications, helping developers avoid runtime errors by ensuring required environment variables are properly configured.",
      techStack: ["Node.js", "JavaScript", "NPM"],
      features: [
        "Environment variable validation",
        "Runtime error prevention",
        "Lightweight and easy to integrate",
        "Available on npm registry"
      ],
      // github: "#",
      demo: "https://www.npmjs.com/package/check-env-sarvesh",
      impact: "Published on NPM"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="projects" className="py-20">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of applications that demonstrate my expertise in full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="glass-card h-full hover:shadow-glow transition-all duration-300 group">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.isInProgress && (
                          <Badge variant="secondary" className="mb-2">
                            In Progress
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-foreground text-sm mb-2">Key Features:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-medium">
                          Impact: {project.impact}
                        </span>
                        <div className="flex space-x-2">
                          {project.github &&
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-surface-hover transition-colors duration-200"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>}
                          {project.demo && <Button
                            size="sm"
                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            {project?.demo?.includes('npmjs') ? 'NPM' : 'Demo'}
                          </Button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;