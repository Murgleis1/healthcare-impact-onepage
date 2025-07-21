import { Button } from "@/components/ui/button";
import { Shield, Target, FileCheck, Heart, Mic, CheckCircle } from "lucide-react";

const SolutionsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const solutions = [
    {
      icon: Shield,
      title: "Fall Prevention Initiatives",
      subtitle: "Our flagship fall prevention system integrates policy, people, and environment.",
      features: [
        "Optimized risk assessment protocols",
        "Onsite environment walkthroughs", 
        "Patient and family communication guides",
        "Team training and accountability models"
      ],
      cta: "Book Dena as a guest speaker for your community or hospital event on fall prevention."
    },
    {
      icon: Target,
      title: "Quality Committee Optimization",
      subtitle: "Your committee should drive results—not just review them.",
      features: [
        "Full structural and process assessment",
        "Leadership development for committee members",
        "Custom implementation frameworks",
        "Ongoing tracking and feedback loops"
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance Readiness",
      subtitle: "Stay ahead of Joint Commission and CMS requirements.",
      features: [
        "Mock surveys by former hospital leaders",
        "Realistic gap analysis with actionable fixes",
        "Custom action plans to address deficiencies"
      ],
      quote: "Compliance doesn't have to be stressful when you prepare intentionally."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Specialty Programs That <span className="text-primary">Set Us Apart</span>
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                <div className="p-8 lg:p-12">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {solution.subtitle}
                      </p>

                      {/* Features List */}
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA or Quote */}
                      {solution.cta && (
                        <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                          <div className="flex items-start space-x-4">
                            <Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-foreground mb-4">{solution.cta}</p>
                              <Button 
                                variant="accent" 
                                size="sm"
                                onClick={() => scrollToSection('speaking')}
                              >
                                <Mic className="mr-2 h-4 w-4" />
                                Book Speaking Engagement
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {solution.quote && (
                        <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                          <p className="text-foreground italic">"{solution.quote}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;