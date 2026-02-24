import { Shield, Leaf, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Dermatologically Tested',
      description: 'Clinically proven formulas',
    },
    {
      icon: Leaf,
      title: '100% Safe Ingredients',
      description: 'Natural and effective',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Always here to help',
    },
  ];

  return (
    <section className="border-y border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <badge.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
