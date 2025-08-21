import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abulkaish827@gmail.com",
      href: "mailto:abulkaish827@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8271-057-255",
      href: "tel:+918271057255"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "D-198/11 New Ashok Nagar, Delhi",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/abulkais",
      color: "hover:text-white"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/abul-kaish",
      color: "hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={info.label} className="p-6 skill-card-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className={`${social.color} transition-colors`}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    {social.icon}
                    <span className="ml-2">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 project-card">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <Input 
                  placeholder="Project discussion"
                  className="mt-2"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="mt-2"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">🎓 Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 skill-card-hover">
              <h4 className="text-lg font-semibold text-primary mb-2">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-muted-foreground mb-2">Monad University, Hapur, Uttar Pradesh</p>
              <p className="text-sm text-muted-foreground">2019 - 2022</p>
            </Card>
            
            <Card className="p-6 skill-card-hover">
              <h4 className="text-lg font-semibold text-primary mb-2">Intermediate</h4>
              <p className="text-muted-foreground mb-2">BSS College, Supaul</p>
              <p className="text-sm text-muted-foreground">2017 - 2019</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;