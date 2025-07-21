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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Image - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-large max-w-md mx-auto">
              <img 
                src="/lovable-uploads/09c602e2-514a-48be-9c0a-3e6ba6533a36.png"
                alt="Dena Sparkman addressing healthcare professionals"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8 text-background order-1 lg:order-2">
            <div className="space-y-0">
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/c50c1463-0606-4fb0-be33-7f7960cebe0d.png"
                  alt="Dena Sparkman Signature"
                  className="h-48 lg:h-64 w-auto object-contain object-left"
                  style={{ 
                    objectPosition: 'left center',
                    clipPath: 'inset(25% 0 15% 0)'
                  }}
                />
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-wide -mt-4">
                  ELEVATING HEALTHCARE <span className="text-accent">EXCELLENCE</span>
                </h1>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-semibold opacity-90 tracking-wide">
                TRANSFORMING HEALTHCARE LEADERSHIP & OUTCOMES
              </h2>
            </div>
            
            <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
              With over 25 years as a healthcare executive, Dena Sparkman helps leaders and 
              organizations achieve lasting operational, clinical, and cultural excellence.
            </p>

            <div className="flex flex-col gap-4 pt-6">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('speaking')}
                className="text-base px-8 py-4 h-auto max-w-sm"
              >
                BOOK DENA FOR YOUR NEXT EVENT
              </Button>
              
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('newsletter')}
                className="text-base px-8 py-4 h-auto max-w-sm"
              >
                GET DENA'S EXCLUSIVE NEWSLETTER
              </Button>
            </div>

            <p className="text-sm opacity-70 pt-2">
              Join hundreds of healthcare professionals learning how to lead with impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;