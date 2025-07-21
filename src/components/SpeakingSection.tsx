import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Building, Target, Globe, Award, Mic, Mail, Phone } from "lucide-react";
import { useState } from "react";

const SpeakingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Speaking inquiry submitted:', formData);
  };

  const audiences = [
    { icon: Building, text: "Hospital leadership teams" },
    { icon: Users, text: "Physician leaders" },
    { icon: Target, text: "Healthcare quality committees" },
    { icon: Globe, text: "Community health organizations" },
    { icon: Award, text: "National and regional conferences" }
  ];

  const topics = [
    "Leadership in Healthcare Crisis",
    "Building High-Performance Teams", 
    "Fall Prevention Best Practices",
    "Strategic Planning for Hospital Executives",
    "Turning Around Failing Committees"
  ];

  return (
    <section id="speaking" className="py-20 bg-primary/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Speaker Who <span className="text-primary">Inspires and Transforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dena Sparkman speaks from the front lines of leadership. Her sessions are packed with 
              actionable insights and are always tailored to your audience—whether hospital executives, 
              clinicians, or board members.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="space-y-8">
              {/* Ideal Audiences */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Ideal Audiences</h3>
                <div className="space-y-4">
                  {audiences.map((audience, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <audience.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{audience.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Topics Dena Covers</h3>
                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                      <Mic className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-medium">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Inquire About Booking Dena</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="Hospital or organization name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Type</label>
                  <Input
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    placeholder="Conference, leadership retreat, etc."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your event, audience, and what you'd like Dena to cover..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Mic className="mr-2 h-5 w-5" />
                  Submit Speaking Inquiry
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>info@qualityfirstconsulting.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Kentucky-based, national availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;