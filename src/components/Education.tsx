import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Microprocessors", 
    "Logic Design",
    "Computer Architecture",
    "Database Management Systems"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-tech" />
            <h2 className="text-4xl font-bold text-primary">Education</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-tech rounded-full"></div>
                  <h3 className="text-2xl font-bold text-primary">Cairo University</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-tech" />
                    <span className="text-lg font-semibold text-secondary">
                      Bachelor of Engineering, Computer Engineering
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-tech" />
                    <span className="text-secondary">
                      Oct 2023 – July 2028 (Expected)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-tech" />
                    <span className="text-secondary">
                      Current CGPA: <span className="font-semibold text-tech">3.76/4.0</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="text-center p-6 bg-gradient-to-br from-tech/10 to-cta/10 rounded-xl border border-tech/20">
                  <div className="text-3xl font-bold text-tech mb-2">3.76</div>
                  <div className="text-sm text-secondary">Current CGPA</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-tech" />
                Relevant Coursework
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {coursework.map((course, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 rounded-full bg-tech/10 text-tech border border-tech/20 text-sm hover:bg-tech/20 transition-smooth"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;