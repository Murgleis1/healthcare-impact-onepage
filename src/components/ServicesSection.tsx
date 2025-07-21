import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, Users, Calendar } from "lucide-react";

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Financial Optimization",
      subtitle: "Increase margins without sacrificing patient care.",
      description: "We identify hidden inefficiencies and implement proven solutions that improve your bottom line within 12 months.",
      highlight: "We've helped clients realize 10–15% margin gains using strategic staffing and workflow realignment."
    },
    {
      icon: Activity,
      title: "Operational Excellence",
      subtitle: "Optimize your hospital operations.",
      description: "We streamline workflows, improve patient throughput, and enhance interdepartmental communication.",
      highlight: "From emergency department delays to surgical suite bottlenecks—we fix what others miss."
    },
    {
      icon: Users,
      title: "Leadership Coaching",
      subtitle: "Empower your leaders to inspire.",
      description: "Tailored coaching programs for executives, physician leaders, and department managers.",
      highlight: "Great leaders don't just emerge—they're trained, equipped, and coached."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Consulting Services That Deliver <span className="text-primary">Real-World Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dena partners with hospitals and health systems to identify bottlenecks, elevate team 
              performance, and improve outcomes through data-backed strategies and coaching.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-lg font-medium text-primary mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-foreground italic">"{service.highlight}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => scrollToSection('speaking')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;