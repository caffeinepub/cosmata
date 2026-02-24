export default function BlogPreview() {
  const articles = [
    {
      title: '5 Steps to Glowing Skin',
      excerpt: 'Discover the essential skincare routine for radiant, healthy skin every day.',
      image: '🌟',
    },
    {
      title: 'Understanding Niacinamide',
      excerpt: 'Learn how this powerful ingredient can transform your skincare routine.',
      image: '💧',
    },
    {
      title: 'Acne Care Guide',
      excerpt: 'Expert tips for managing acne and achieving clear, beautiful skin.',
      image: '✨',
    },
  ];

  return (
    <section id="blog" className="bg-beige py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Skincare Tips & Insights
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={index}
              href="#blog"
              className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-gold/10 text-6xl">
                {article.image}
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground group-hover:text-gold">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
