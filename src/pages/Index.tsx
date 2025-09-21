import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
