import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface/50 border-t border-border py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left mb-4 md:mb-0"
                    >
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Sarvesh Talekar • Crafted with React, Shadcn UI & Tailwind CSS
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-center space-x-4"
                    >
                        <motion.a
                            href="https://github.com/sarveshT7"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <FaGithub className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/sarvesh-talekar-98bb0a135/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;