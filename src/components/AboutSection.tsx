import { CheckCircle, GraduationCap, Building2, Users, Wheat, Heart, Award, Quote } from "lucide-react";

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
      icon: Building2,
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Dena Sparkman, <span className="text-primary">FACHE</span>
            </h2>
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-soft">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Healthcare Excellence</span>
              </div>
              <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-soft">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">25+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Professional Photo */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src="/lovable-uploads/9c336bdd-88ae-4b9a-a1b6-b53a7b042def.png"
                    alt="Dena Sparkman, FACHE - Healthcare Executive and Consultant"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-xl transform translate-x-4 translate-y-4 -z-10"></div>
                
                {/* Achievement badges */}
                <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-medium border border-border">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-accent" />
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary">FACHE</div>
                      <div className="text-xs text-muted-foreground">Fellow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Dena Sparkman is a nationally recognized healthcare leader, speaker, and consultant 
                  known for her hands-on leadership style, strategic insight, and results-driven programs. 
                  As a Fellow of the American College of Healthcare Executives, and a former Community 
                  CEO and VP of Clinical Excellence, Dena brings credibility and firsthand experience 
                  to every engagement.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a proven track record of transforming healthcare organizations across the country, 
                  Dena specializes in operational excellence, fall prevention, leadership development, 
                  and regulatory compliance. Her practical approach combines strategic thinking with 
                  hands-on implementation to deliver measurable results.
                </p>

                {/* Quote Block */}
                <div className="bg-card p-8 rounded-xl shadow-soft border-l-4 border-primary relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                  <blockquote className="text-xl italic text-foreground mb-4">
                    "Excellence in healthcare begins with courageous leadership and intentional 
                    culture design. That's what I bring to the table."
                  </blockquote>
                  <cite className="block text-primary font-semibold">— Dena Sparkman, FACHE</cite>
                </div>
              </div>

              {/* Key Highlights Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  Key Highlights
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-foreground leading-relaxed text-sm">{highlight.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <div className="text-sm text-muted-foreground">Organizations Served</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Avg. Fall Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;