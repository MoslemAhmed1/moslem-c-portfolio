import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Cpu, Code, Zap, Bot } from "lucide-react";
import gameboyImage from "@/assets/project-gameboy.jpg";
import pathfindingImage from "@/assets/project-pathfinding.jpg";
import vehicleImage from "@/assets/project-vehicle.jpg";

const Projects = () => {
  const projects = [
    {
      title: "GameBoy Console",
      subtitle: "STM32 Microcontroller, ARM Assembly, TFT Screen",
      period: "Apr. 2025 – May. 2025",
      description: "Built a fully functional GameBoy using STM32 microcontroller, 3.5-inch TFT screen and pure ARM Assembly.",
      highlights: [
        "Developed games including XO, Pong, Whack-A-Mole, and 2D Swords Fighting with dynamic menu system",
        "Implemented custom interrupt handlers to manage user input controls and game rendering",
        "Optimized memory usage and processing efficiency for smooth gameplay on embedded hardware"
      ],
      technologies: ["STM32", "ARM Assembly", "TFT Display", "Embedded C", "Real-time Systems"],
      image: gameboyImage,
      icon: Bot,
      gradient: "from-tech to-cta",
      github: "https://github.com/MoslemAhmed1" // Using the CV GitHub link
    },
    {
      title: "Pathfinding Visualizer",
      subtitle: "C++, Raylib, Pathfinding Algorithms",
      period: "Aug. 2025 – Sep. 2025",
      description: "Developed an interactive visualizer for pathfinding and maze generation algorithms using C++ and Raylib.",
      highlights: [
        "Implemented BFS, Dijkstra, A*, and Greedy BFS for shortest pathfinding with step-by-step visualization",
        "Integrated DFS Backtracking and Prim's algorithms for dynamic maze generation",
        "Designed grid-based UI with real-time cell updates and status messages for user interaction"
      ],
      technologies: ["C++", "Raylib", "Algorithm Visualization", "Graph Theory", "GUI Development"],
      image: pathfindingImage,
      icon: Code,
      gradient: "from-cta to-tech",
      github: "https://github.com/MoslemAhmed1"
    },
    {
      title: "Lane Driving Vehicle",
      subtitle: "STM32, Embedded C, IR Sensors",
      period: "Feb. 2025 – Mar. 2025",
      description: "Designed and implemented a lane-tracking vehicle using Embedded C on an STM32 microcontroller.",
      highlights: [
        "Integrated IR sensors for real-time lane detection and navigation",
        "Developed control algorithms to maintain vehicle position within lane boundaries",
        "Implemented embedded control systems for autonomous navigation"
      ],
      technologies: ["STM32", "Embedded C", "IR Sensors", "Control Systems", "Real-time Processing"],
      image: vehicleImage,
      icon: Cpu,
      gradient: "from-primary to-tech",
      github: "https://github.com/MoslemAhmed1"
    },
    {
      title: "NSL-KDD Intrusion Detection",
      subtitle: "Python, Pandas, Scikit-learn",
      period: "2025",
      description: "Applied machine learning techniques on the NSL-KDD dataset to classify network traffic with high accuracy.",
      highlights: [
        "Performed data cleaning, feature engineering, and preprocessing on the NSL-KDD dataset",
        "Trained and evaluated multiple ML models with cross-validation and hyperparameter tuning",
        "Achieved a classification performance score of 99.91% on the dataset"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "EDA", "ML Models"],
      image: null,
      icon: Zap,
      gradient: "from-tech to-primary",
      github: "https://github.com/MoslemAhmed1"   // Replace with the specific repo/notebook link if available
}
  ];

  const otherProjects = [
    {
      title: "Physiotherapy Center System",
      subtitle: "Data Structures, C++",
      period: "Mar. 2025 – Apr. 2025",
      description: "Developed a system to efficiently manage patient appointments, therapist schedules and treatment devices using advanced data structures.",
      technologies: ["C++", "Data Structures", "Algorithms", "System Design"]
    },
    {
      title: "Basic ALU on FPGA",
      subtitle: "FPGA, Verilog, Digital Logic",
      period: "Dec. 2024 – Jan. 2025",
      description: "Designed and implemented a sequential arithmetic logic unit on FPGA supporting dynamic input with 7-segment displays.",
      technologies: ["FPGA", "Verilog", "Digital Logic", "Circuit Design"]
    },
    {
    title: "SnakeMon Game",
    subtitle: "C++, CMUgraphics, OOP",
    period: "Dec. 2024 – Jan. 2025",
    description: "Developed a unique mix of Snakes and Ladders and Monopoly with a custom interactive grid and dynamic gameplay.",
    technologies: ["C++", "CMUgraphics", "OOP", "Game Development", "UI Design"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Practical Projects & Learning Applications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From machine learning experiments to algorithm visualizations and interactive software—showcasing hands-on projects that apply 
            theory to practice and highlight continuous learning.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-elevated border-0 bg-gradient-to-br from-card to-secondary/30">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  ) : (
                    <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-tech/20 to-cta/20 flex items-center justify-center">
                      <project.icon className="w-24 h-24 text-tech/40" />
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                  
                  {/* Floating Period Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white backdrop-blur-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <project.icon className="w-6 h-6 text-tech" />
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary">{project.title}</h3>
                      </div>
                      <p className="text-tech font-medium mb-4">{project.subtitle}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-tech/10 text-tech border-tech/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <Button variant="tech" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elevated transition-smooth">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{project.title}</h4>
                    <p className="text-tech font-medium text-sm mb-3">{project.subtitle}</p>
                    <Badge variant="outline" className="text-xs mb-4">
                      {project.period}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
