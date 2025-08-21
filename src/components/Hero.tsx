import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-animation opacity-40" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-glow/15 rounded-full blur-3xl floating-animation opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Hello Introduction */}
            <p className="text-lg text-foreground/80 mb-4">
              Hello, my name is <span className="text-primary font-semibold">Abul Kaish</span>
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              I'm a <span className="hero-text-glow">Developer</span>
              <span className="text-accent ml-4 font-mono"> &lt;/&gt;</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light mb-8 text-foreground/90">
              Full Stack Developer
            </h2>
            
            <p className="text-lg lg:text-xl mb-8 text-foreground/80 max-w-2xl leading-relaxed">
              Experienced Developer proficient in various technologies. Passionate about problem-solving 
              and creating efficient solutions. Constantly learning and adapting to deliver high-quality 
              software products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-primary/90 font-semibold px-8 shadow-glow"
              >
                About Me
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8"
              >
                View Projects
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>abulkaish827@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New Ashok Nagar, Delhi</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-neon ring-2 ring-primary/30">
                <img 
                  src="/lovable-uploads/16499cdc-0266-4d09-a311-194b827a7172.png" 
                  alt="Abul Kaish - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-lg opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;