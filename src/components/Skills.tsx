import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Heart, Target } from "lucide-react";
const Skills = () => {
  const technicalSkills = [{
    name: "C++",
    category: "primary"
  }, {
    name: "Python",
    category: "primary"
  }, {
    name: "ARM Assembly",
    category: "specialty"
  }, {
    name: "Embedded C",
    category: "specialty"
  }, {
    name: "STM32",
    category: "hardware"
  }, {
    name: "Verilog",
    category: "hardware"
  }, {
    name: "SQL",
    category: "secondary"
  }, {
    name: "HTML/CSS",
    category: "secondary"
  }, {
    name: "Git & GitHub",
    category: "tools"
  }, {
    name: "Linux",
    category: "tools"
  }, {
    name: "NumPy",
    category: "libraries"
  }, {
    name: "Pandas",
    category: "libraries"
  }, {
    name: "Matplotlib",
    category: "libraries"
  }, {
    name: "Scikit-learn",
    category: "libraries"
  }];
  const softSkills = ["Teamwork", "Adaptability", "Time Management", "Communication", "Problem Solving"];
  const valuePropositions = [{
    icon: Target,
    title: "Accurate Models",
    description: "Building and evaluating ML models with clear validation metrics to achieve reliable results"
  }, {
    icon: Code,
    title: "Reproducible Workflows",
    description: "Well-structured, documented Jupyter notebooks and pipelines for transparent and shareable analysis"
  }, {
    icon: Wrench,
    title: "Data Insights",
    description: "Transforming complex datasets into clear visualizations and actionable insights"
  }];
  const getSkillColor = (category: string) => {
    switch (category) {
      case "primary":
        return "bg-tech text-tech-foreground";
      case "specialty":
        return "bg-cta text-cta-foreground";
      case "hardware":
        return "bg-primary text-primary-foreground";
      case "tools":
        return "bg-secondary text-secondary-foreground";
      case "libraries":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  return <section id="skills" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-cta/10 text-cta border-cta/20">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Technical Excellence &{" "}
            <span className="text-gradient">Practical ML Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Combining strong analytical skills with a growing foundation in data analysis and machine learning to deliver clear insights, reproducible workflows, and practical solutions to complex problems.</p>
        </div>

        <div className="space-y-16">
          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((item, index) => <Card key={index} className="p-8 text-center shadow-card border-tech/10 hover:shadow-elevated transition-smooth">
                <div className="w-16 h-16 bg-tech/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-tech" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>)}
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-tech" />
                <h3 className="text-2xl font-semibold text-primary">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.filter(skill => ["primary", "specialty"].includes(skill.category)).map((skill, index) => <Badge key={index} className={getSkillColor(skill.category)}>
                        {skill.name}
                      </Badge>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Hardware & Systems
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.filter(skill => skill.category === "hardware").map((skill, index) => <Badge key={index} className={getSkillColor(skill.category)}>
                        {skill.name}
                      </Badge>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Tools & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.filter(skill => ["tools", "libraries", "secondary"].includes(skill.category)).map((skill, index) => <Badge key={index} className={getSkillColor(skill.category)}>
                        {skill.name}
                      </Badge>)}
                  </div>
                </div>
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-cta" />
                <h3 className="text-2xl font-semibold text-primary">Soft Skills</h3>
              </div>
              
              <div className="space-y-4">
                {softSkills.map((skill, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                    <div className="w-2 h-2 bg-cta rounded-full"></div>
                    <span className="text-primary font-medium">{skill}</span>
                  </div>)}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-tech/10 to-cta/10 rounded-xl border border-tech/20">
                <h4 className="font-semibold text-primary mb-2">Languages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Arabic</span>
                    <Badge variant="outline" className="text-xs">Native</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">English</span>
                    <Badge variant="outline" className="text-xs">Fluent</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">German</span>
                    <Badge variant="outline" className="text-xs">Learning</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;