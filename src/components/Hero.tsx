import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-glow ring-4 ring-white/20">
              <img 
                src="/lovable-uploads/ebdfb32b-20f4-43b0-bd55-b0f4415daee9.png" 
                alt="Abul Kaish - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="hero-text-glow">ABUL KAISH</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-light mb-6 text-white/90">
              Full Stack Developer
            </h2>
            
            <p className="text-lg lg:text-xl mb-8 text-white/80 max-w-2xl leading-relaxed">
              Motivated Full Stack Developer with 3.4 years of experience in software development, 
              specializing in building scalable and user-focused web applications. Proficient in HTML, CSS, 
              Tailwind CSS, JavaScript, Bootstrap, ReactJS, MySQL, Node.js, and Core PHP.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-5 h-5" />
                <span>abulkaish827@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Delhi, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-4"
                onClick={() => window.open('https://github.com/abulkais', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;