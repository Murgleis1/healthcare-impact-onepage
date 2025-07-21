import { Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: "About Dena", sectionId: "about" },
    { label: "Services", sectionId: "services" },
    { label: "Newsletter", sectionId: "newsletter" },
    { label: "Speaking", sectionId: "speaking" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/0dbd120b-9204-49dc-a34c-b2e087c56c6d.png" 
              alt="Quality First Consulting"
              className="h-12 w-auto mb-4"
            />
            <p className="text-lg text-background/80 mb-6 leading-relaxed">
              Healthcare Leadership That Heals
            </p>
            <p className="text-background/70 leading-relaxed">
              With over 25 years of healthcare executive experience, Dena Sparkman transforms 
              leadership and outcomes across America's healthcare systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/80">info@qualityfirstconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/80">Dena Sparkman</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/80">Kentucky-based, national availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Quality First Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;