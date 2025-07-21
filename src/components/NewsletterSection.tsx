import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Stethoscope, BarChart3, Video, Mail } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    speakingInterest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', formData);
  };

  const benefits = [
    {
      icon: AlertCircle,
      text: "Timely insights on regulatory changes"
    },
    {
      icon: Stethoscope,
      text: "Leadership tips based on 25+ years in the field"
    },
    {
      icon: BarChart3,
      text: "Case studies and client success stories"
    },
    {
      icon: Video,
      text: "First access to webinars, workshops, and resources"
    }
  ];

  return (
    <section id="newsletter" className="py-20 bg-gradient-hero text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Exclusive Healthcare <span className="text-accent">Leadership Insights</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Every week, Dena shares practical tools, thought leadership, and industry commentary 
              that helps healthcare professionals lead with clarity and courage.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-background/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Signup Form */}
          <div className="bg-background/10 backdrop-blur-sm p-8 rounded-xl shadow-large max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Join Dena's Newsletter</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="bg-background/90 text-foreground border-background/30"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="bg-background/90 text-foreground border-background/30"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 text-left">
                <Checkbox 
                  id="speaking-interest"
                  checked={formData.speakingInterest}
                  onCheckedChange={(checked) => setFormData({...formData, speakingInterest: checked as boolean})}
                  className="border-background/30"
                />
                <label htmlFor="speaking-interest" className="text-sm">
                  I'm also interested in speaking opportunities
                </label>
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full text-lg py-4 h-auto"
              >
                <Mail className="mr-2 h-5 w-5" />
                Join Dena's Newsletter
              </Button>
            </form>

            <p className="text-sm opacity-70 mt-4">
              Join hundreds of healthcare professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;