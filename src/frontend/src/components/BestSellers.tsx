import { useGetBestSellers } from '../hooks/useQueries';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function BestSellers() {
  const { data: products, isLoading } = useGetBestSellers();

  return (
    <section className="bg-beige py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Best Sellers
        </h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products?.map((product) => (
              <ProductCard key={product.id.toString()} product={product} showBestSellerBadge />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
