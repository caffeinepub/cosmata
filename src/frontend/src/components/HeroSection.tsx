import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Glow Naturally. Clinically Proven.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Reveal your healthiest skin with Cosmata's science-backed skincare solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gold text-white hover:bg-gold/90"
                onClick={() => navigate({ to: '/shop' })}
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10"
                onClick={() => navigate({ to: '/shop' })}
              >
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <img
              src="/assets/generated/hero.dim_1920x1080.png"
              alt="Cosmata Premium Skincare"
              className="h-auto w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
