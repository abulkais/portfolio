import { Code, Database, Palette, Server, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Bootstrap", "ChartJS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Core PHP", "MySQL", "API Development"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "MongoDB", "Database Design", "Query Optimization"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Responsive Design", "User Experience", "Material UI"],
      color: "from-pink-500 to-rose-600"
    }
  ];

  const technologies = [
    "HTML", "CSS", "Tailwind CSS", "JavaScript", "Bootstrap", "ReactJS", 
    "Core PHP", "MySQL", "Node.js", "MongoDB"
  ];

  return (
    <section id="skills" className="py-10 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in modern web development technologies and frameworks
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="skill-card-hover p-6 text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-sm text-muted-foreground bg-background/50 rounded-full px-3 py-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out both'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;