import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      review: 'Cosmata transformed my skin! The serum is amazing and my acne scars have faded significantly.',
      rating: 5,
    },
    {
      name: 'Ananya Patel',
      review: 'Finally found a brand that works! My skin feels healthier and glows naturally. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Riya Gupta',
      review: 'The cleanser is so gentle yet effective. My skin has never looked better. Worth every rupee!',
      rating: 5,
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          What Our Customers Say
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.review}</p>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
