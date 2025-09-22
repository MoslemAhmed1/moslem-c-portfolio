import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Code, Zap, Settings, Microchip, Cog, Mail } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Embedded Firmware Development",
      description: "Custom firmware solutions for STM32 and ARM-based microcontrollers with real-time constraints",
      technologies: ["STM32", "ARM Assembly", "Real-time Systems", "Interrupt Handling"],
      pricing: "Starting from $50/hour"
    },
    {
      icon: Code,
      title: "Low-Level C++ Systems",
      description: "Performance-optimized C++ applications for resource-constrained environments",
      technologies: ["C++", "Memory Optimization", "Performance Tuning", "System Programming"],
      pricing: "Project-based pricing"
    },
    {
      icon: Zap,
      title: "Real-Time Control Algorithms",
      description: "Implementation of control systems for embedded applications and IoT devices",
      technologies: ["Control Theory", "Sensor Integration", "Real-time Processing"],
      pricing: "Custom quotes"
    },
    {
      icon: Microchip,
      title: "FPGA/Verilog Prototyping",
      description: "Digital logic design and FPGA implementation for rapid prototyping",
      technologies: ["Verilog", "FPGA", "Digital Logic", "Hardware Description"],
      pricing: "Per project scope"
    },
    {
      icon: Settings,
      title: "IoT Device Integration",
      description: "End-to-end IoT solutions from sensor integration to cloud connectivity",
      technologies: ["IoT Protocols", "Sensor Networks", "Data Processing"],
      pricing: "Consultation available"
    },
    {
      icon: Cog,
      title: "Code Optimization & Debugging",
      description: "Performance analysis, memory optimization, and embedded system debugging",
      technologies: ["Profiling", "Debugging Tools", "Performance Analysis"],
      pricing: "Hourly or retainer"
    }
  ];

  const engagementTypes = [
    {
      title: "Hourly Consulting",
      description: "Perfect for quick fixes, code reviews, or short-term support",
      rate: "$50-75/hour",
      color: "border-tech/20 bg-tech/5"
    },
    {
      title: "Short Contracts",
      description: "2-4 week projects for prototype development or specific features",
      rate: "Fixed pricing",
      color: "border-cta/20 bg-cta/5"
    },
    {
      title: "Full Projects",
      description: "Complete embedded systems development from concept to production",
      rate: "Custom quotes",
      color: "border-primary/20 bg-primary/5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-cta/10 text-cta border-cta/20">
            Services Offered
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Embedded Systems{" "}
            <span className="text-gradient">Expertise for Hire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional embedded development services from firmware to full system integration
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-smooth border-tech/10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-tech/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-tech" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-tech font-semibold">{service.pricing}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Engagement Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Engagement Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementTypes.map((type, index) => (
              <Card key={index} className={`p-6 border-2 ${type.color} hover:scale-105 transition-smooth`}>
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-semibold text-primary">{type.title}</h4>
                  <p className="text-muted-foreground">{type.description}</p>
                  <div className="text-2xl font-bold text-tech">{type.rate}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-tech/10 to-cta/10 border-tech/20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-primary">Ready to Start Your Project?</h3>
            <p className="text-xl text-muted-foreground">
              Let's discuss your embedded systems needs and turn your hardware constraints into innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="mailto:moslem.ism06@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
              </Button>
              <Button variant="tech" size="lg" asChild>
                <a href="#contact">
                  View Portfolio
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Quick response time:</strong> I typically respond to project inquiries within 24 hours
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;