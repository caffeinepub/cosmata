import { useGetAllProducts } from '../hooks/useQueries';
import ProductCard from '../components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function ShopPage() {
  const { data: products, isLoading } = useGetAllProducts();

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">Shop All Products</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
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
            <ProductCard key={product.id.toString()} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
