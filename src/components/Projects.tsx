import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Comprehensive healthcare solution with patient management, OPD/IPD admissions, billing system, and role-based access for different healthcare professionals.",
      technologies: ["ReactJS", "Node.js", "MySQL", "Bootstrap"],
      features: [
        "Patient Management & Smart Cards",
        "Electronic Medical Records (EMR)",
        "Billing & Finance Automation", 
        "Real-time Communication & Zoom Integration"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "HR Management System", 
      description: "Complete HRMS solution for employee lifecycle management, from onboarding to performance tracking, with automated payroll and recruitment features.",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Employee Onboarding & Management",
        "Attendance & Leave Tracking",
        "Payroll & Finance Automation",
        "Recruitment & Interview Scheduling"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Lead Management Dashboard",
      description: "Secure admin dashboard for business lead management with OTP authentication, lead tracking, and comprehensive reporting capabilities.",
      technologies: ["Core PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "4-digit OTP Security System",
        "Complete Lead Lifecycle Management", 
        "Lead Comments & Tracking",
        "Lightweight Responsive Design"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blog Management Panel",
      description: "Robust blog management system built with ReactJS frontend and Node.js backend, featuring content management and database integration.",
      technologies: ["ReactJS", "Node.js", "MySQL", "Express.js"],
      features: [
        "Content Creation & Management",
        "User-friendly Interface",
        "Database Integration",
        "Responsive Design"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of innovative solutions and complex systems I've built from concept to deployment
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card p-8 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Header */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`relative bg-gradient-to-r ${project.color} p-6 rounded-lg text-white`}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-gradient-primary hover:bg-gradient-primary/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:bg-gradient-primary/90"
            onClick={() => window.open('https://github.com/abulkais', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;