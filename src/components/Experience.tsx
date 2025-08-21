import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey building innovative solutions and managing complex projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <Card className="project-card p-8">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">SISGAIN</h3>
                </div>
                <p className="text-lg text-muted-foreground">Full Stack Developer</p>
              </div>
              
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <Badge variant="outline" className="text-sm">
                  February 2022 - Present
                </Badge>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {/* Hospital Management System */}
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  Hospital Management System (HMS)
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "Bootstrap", "ReactJS", "Node.js", "MySQL"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  Developed a comprehensive Hospital Management System from scratch to streamline 
                  hospital operations, patient records, and role-based access management.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Key Features:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Patient Management & Smart Cards</li>
                      <li>• OPD/IPD Admissions</li>
                      <li>• Appointment Scheduling</li>
                      <li>• Electronic Medical Records</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Advanced Features:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Billing & Finance Automation</li>
                      <li>• Medical Services & Lab Reports</li>
                      <li>• Role-based Access Control</li>
                      <li>• Real-time Communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* HR Management System */}
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold mb-3 text-accent">
                  Human Resource Management System (HRMS)
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "Tailwind CSS", "ReactJS", "Node.js", "MongoDB"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  Designed and developed a Human Resource Management System to streamline 
                  employee management, payroll processing, and organizational operations.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Core Features:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Employee Onboarding</li>
                      <li>• Attendance Tracking</li>
                      <li>• Leave Management</li>
                      <li>• Performance Records</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Business Features:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Payroll & Finance</li>
                      <li>• Recruitment Management</li>
                      <li>• Role-based Dashboards</li>
                      <li>• Analytics & Reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead Management Dashboard */}
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-semibold mb-3 text-green-600">
                  Lead Management Dashboard
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript", "Bootstrap", "Core PHP", "MySQL"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  Built a secure admin-only dashboard for managing business leads with advanced 
                  security features and efficient lead management capabilities.
                </p>

                <div className="text-sm">
                  <h5 className="font-semibold mb-2">Features:</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 4-digit OTP secure login system</li>
                    <li>• Complete lead lifecycle management</li>
                    <li>• Lead commenting and tracking</li>
                    <li>• Lightweight, responsive UI design</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;