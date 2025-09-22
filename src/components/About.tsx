import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Code, Zap, Users } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Cpu,
    title: "Embedded Systems",
    description: "STM32, ARM Assembly, Real-time Control"
  }, {
    icon: Code,
    title: "Systems Programming",
    description: "C++, Python, Low-level Optimization"
  }, {
    icon: Zap,
    title: "Performance Focus",
    description: "Memory optimization, Resource efficiency"
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Git workflows, Documentation, Communication"
  }];
  return <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-tech/10 text-tech border-tech/20">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Building the Future of{" "}
            <span className="text-gradient">I'm Moslem Ahmed, a Computer Engineering student at Cairo University with a 3.76 CGPA, I’m learning and applying data analysis and machine learning techniques to real problems.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed">
                I'm <strong className="text-primary">Moslem Ahmed</strong>, a Computer Engineering student at 
                Cairo University with a <strong className="text-tech">3.76 CGPA</strong>, specializing in 
                embedded systems and systems-level C++ development.
              </p>
              
              <p className="text-lg leading-relaxed">I enjoy turning messy data into concise stories, building reproducible notebooks, and developing baseline ML models that are transparent and easy to reproduce.</p>
              
              <p className="text-lg leading-relaxed">
                My passion lies in creating efficient, maintainable code that maximizes performance 
                on resource-constrained systems. Whether it's implementing real-time control algorithms 
                or developing interactive gaming systems on embedded hardware, I thrive on challenges 
                that demand both technical precision and creative problem-solving.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-tech/10 text-tech border-tech/20">
                Expected Graduation: July 2028
              </Badge>
              <Badge variant="secondary" className="bg-cta/10 text-cta border-cta/20">
                Cairo University
              </Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => <Card key={index} className="p-6 shadow-card border-tech/10 hover:shadow-elevated transition-smooth hover:scale-105 bg-gradient-to-br from-card to-secondary/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-tech/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-tech" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;