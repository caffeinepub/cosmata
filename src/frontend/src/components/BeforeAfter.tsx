import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="bg-beige py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Real Results
        </h2>
        <p className="mb-12 text-center text-muted-foreground">See the transformation</p>
        
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Before Image */}
            <img
              src="/assets/generated/before-acne.dim_600x800.png"
              alt="Before"
              className="h-auto w-full"
            />
            
            {/* After Image with Clip */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/assets/generated/after-clear.dim_600x800.png"
                alt="After"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Slider */}
            <div className="absolute inset-0 flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="slider w-full cursor-ew-resize"
                style={{
                  background: 'transparent',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                }}
              />
              <div
                className="pointer-events-none absolute top-0 h-full w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-gold shadow-lg" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white">
              Before
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white">
              After
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-muted-foreground">
            * Results may vary. Individual results depend on skin type and consistent use.
          </p>
        </div>
      </div>
    </section>
  );
}
