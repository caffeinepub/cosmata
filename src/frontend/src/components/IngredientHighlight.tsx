export default function IngredientHighlight() {
  const ingredients = [
    {
      name: 'Vitamin C',
      benefit: 'Brightens skin tone and reduces dark spots for a radiant complexion.',
    },
    {
      name: 'Kojic Acid',
      benefit: 'Helps fade pigmentation and evens out skin texture naturally.',
    },
    {
      name: 'Niacinamide',
      benefit: 'Minimizes pores and strengthens the skin barrier for healthier skin.',
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/assets/generated/skin-texture.dim_800x600.png"
              alt="Healthy Skin Texture"
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Powered by Science
            </h2>
            <div className="space-y-6">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="border-l-4 border-gold pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{ingredient.name}</h3>
                  <p className="text-muted-foreground">{ingredient.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
