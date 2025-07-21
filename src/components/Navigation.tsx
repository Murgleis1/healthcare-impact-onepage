import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-foreground">
              Quality First <span className="text-primary">Consulting</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('speaking')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Speaking
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Newsletter
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('newsletter')}
              className="hidden sm:inline-flex"
            >
              Newsletter
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('speaking')}
            >
              Book Dena
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;