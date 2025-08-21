import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-primary">Kaish</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'about' },
              { name: 'About', id: 'skills' },
              { name: 'Experience', id: 'experience' },
              { name: 'Technologies', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Education', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary hover:bg-gradient-primary/90 shadow-glow"
          >
            Get A Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;