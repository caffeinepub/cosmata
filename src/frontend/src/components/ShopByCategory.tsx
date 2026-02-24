import { useNavigate } from '@tanstack/react-router';

export default function ShopByCategory() {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Serum',
      image: '/assets/generated/product-serum.dim_400x400.png',
    },
    {
      name: 'Cleanser',
      image: '/assets/generated/product-cleanser.dim_400x400.png',
    },
    {
      name: 'Moisturizer',
      image: '/assets/generated/product-moisturizer.dim_400x400.png',
    },
    {
      name: 'Face Wash',
      image: '/assets/generated/product-facewash.dim_400x400.png',
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate({ to: '/shop' })}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
