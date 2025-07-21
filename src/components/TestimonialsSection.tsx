import { Star, Quote, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Dena helped us reduce patient falls by 40% in less than a year. Her approach was hands-on, evidence-based, and incredibly effective.",
      author: "Chief Nursing Officer",
      organization: "Kentucky Regional Hospital",
      rating: 5
    },
    {
      quote: "The leadership coaching transformed our executive team culture. Dena's experience is unmatched.",
      author: "CEO",
      organization: "Multisite Health System", 
      rating: 5
    },
    {
      quote: "Quality First Consulting helped us navigate our Joint Commission survey with confidence. Their preparation was thorough and practical.",
      author: "Quality Director",
      organization: "Community Medical Center",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Leaders Across the <span className="text-primary">Healthcare Landscape</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="h-6 w-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;