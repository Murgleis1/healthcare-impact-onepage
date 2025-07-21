import { Button } from "@/components/ui/button";
import { Bell, Mic } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-background">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Elevating Healthcare <span className="text-accent">Excellence</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light opacity-90">
                Transforming Healthcare Leadership & Outcomes
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl opacity-80 leading-relaxed max-w-2xl">
              With over 25 years as a healthcare executive, Dena Sparkman helps leaders and 
              organizations achieve lasting operational, clinical, and cultural excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('newsletter')}
                className="text-lg px-8 py-4 h-auto"
              >
                <Bell className="mr-2 h-5 w-5" />
                Get Dena's Exclusive Newsletter
              </Button>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('speaking')}
                className="text-lg px-8 py-4 h-auto"
              >
                <Mic className="mr-2 h-5 w-5" />
                Book Dena for Your Next Event
              </Button>
            </div>

            <p className="text-sm opacity-70 pt-2">
              Join hundreds of healthcare professionals learning how to lead with impact.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-large">
              <img 
                src="/lovable-uploads/09c602e2-514a-48be-9c0a-3e6ba6533a36.png"
                alt="Dena Sparkman addressing healthcare professionals"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;