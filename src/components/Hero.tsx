import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-embedded.jpg";
import profileImage from "@/assets/profile-placeholder.jpg";
const Hero = () => {
  return <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-tech/10">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-tech blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-cta blur-3xl animate-float"></div>
      </div>
      
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Embedded Systems Development" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-tech/10 text-tech border-tech/20 font-medium">
                Available for Freelance & Full-time
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-primary">Moslem</span>{" "}
                <span className="text-gradient">Ahmed</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Computer Engineering Student ·{" "}
                <span className="text-tech font-semibold">Embedded Systems</span> &{" "}
                <span className="text-cta font-semibold">C++ Developer</span>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Efficient firmware & low-level systems for resource-constrained devices.
                Turning hardware constraints into dependable products.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tech" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-tech" />
                <span>+20-102-628-5308</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="mailto:moslem.ism06@gmail.com">
                  Work with me
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="tech" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-tech/10 hover:text-tech">
                <a href="mailto:moslem.ism06@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-tech/10 hover:text-tech">
                <a href="https://linkedin.com/in/moslem-ahmed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-tech/10 hover:text-tech">
                <a href="https://github.com/MoslemAhmed1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          
        </div>
      </div>
    </section>;
};
export default Hero;