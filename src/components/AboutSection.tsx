import { CheckCircle, GraduationCap, Building, Users, Wheat } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      text: "25+ years in hospital executive leadership roles"
    },
    {
      icon: GraduationCap,
      text: "Fellow of the American College of Healthcare Executives"
    },
    {
      icon: Building,
      text: "Proven success in both acute and ambulatory care"
    },
    {
      icon: Users,
      text: "Trusted speaker at leadership summits and hospital conferences"
    },
    {
      icon: Wheat,
      text: "Deep expertise in regional systems and rural healthcare delivery"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Dena Sparkman, <span className="text-primary">FACHE</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dena Sparkman is a nationally recognized healthcare leader, speaker, and consultant 
                known for her hands-on leadership style, strategic insight, and results-driven programs. 
                As a Fellow of the American College of Healthcare Executives, and a former Community 
                CEO and VP of Clinical Excellence, Dena brings credibility and firsthand experience 
                to every engagement.
              </p>

              {/* Quote Block */}
              <div className="bg-card p-8 rounded-xl shadow-soft border-l-4 border-primary">
                <blockquote className="text-xl italic text-foreground">
                  "Excellence in healthcare begins with courageous leadership and intentional 
                  culture design. That's what I bring to the table."
                </blockquote>
                <cite className="block mt-4 text-primary font-semibold">— Dena Sparkman, FACHE</cite>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Key Highlights</h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;