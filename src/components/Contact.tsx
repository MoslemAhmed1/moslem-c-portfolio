import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "moslem.ism06@gmail.com",
      href: "mailto:moslem.ism06@gmail.com",
      description: "Best for project inquiries and detailed discussions"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20-102-628-5308",
      href: "tel:+201026285308",
      description: "Available for urgent project discussions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/moslem-ahmed",
      href: "https://linkedin.com/in/moslem-ahmed",
      description: "Professional networking and career opportunities"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/MoslemAhmed1",
      href: "https://github.com/MoslemAhmed1",
      description: "View source code and technical projects"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Let's Work Together
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Start Your Next{" "}
            <span className="text-gradient">Data Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore insights from your data? Let's discuss your project requirements
            and create clean, reproducible solutions together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card bg-gradient-to-br from-card to-secondary/30">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-tech" />
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">Based in Cairo, Egypt</h3>
                    <p className="text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth">
                      <div className="w-10 h-10 bg-tech/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-tech" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{method.title}</h4>
                        <Button variant="link" className="p-0 h-auto text-tech hover:text-tech-dark" asChild>
                          <a href={method.href} target={method.title === 'LinkedIn' || method.title === 'GitHub' ? '_blank' : undefined} rel={method.title === 'LinkedIn' || method.title === 'GitHub' ? 'noopener noreferrer' : undefined}>
                            {method.value}
                            {(method.title === 'LinkedIn' || method.title === 'GitHub') && <ExternalLink className="w-3 h-3 ml-1" />}
                          </a>
                        </Button>
                        <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 shadow-card border-cta/20 bg-gradient-to-r from-cta/5 to-tech/5">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-cta" />
                <h3 className="text-xl font-semibold text-primary">Current Availability</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-primary font-medium">Available for new projects</span>
                </div>
                <p className="text-muted-foreground">
                  Currently accepting freelance projects and consulting opportunities. 
                  Expected graduation: July 2028, open to full-time discussions for 2028.
                </p>
                <div className="pt-2">
                  <Badge variant="secondary" className="bg-cta/10 text-cta border-cta/20">
                    Response time: Within 24 hours
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary/5 to-tech/5 border-primary/20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you need data cleaning, exploratory analysis, or baseline machine learning models, 
              I'm here to help you turn raw data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:moslem.ism06@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
              </Button>
              <Button variant="tech" size="lg" asChild>
                <a href="https://github.com/MoslemAhmed1" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View My Code
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free initial consultation • Quick response time • Professional delivery
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;