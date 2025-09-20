import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
