import { type Product } from '../backend';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAddToCart } from '../hooks/useQueries';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showBestSellerBadge?: boolean;
}

export default function ProductCard({ product, showBestSellerBadge }: ProductCardProps) {
  const addToCartMutation = useAddToCart();

  const handleAddToCart = () => {
    addToCartMutation.mutate({ productId: product.id, quantity: BigInt(1) });
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-beige">
        {showBestSellerBadge && product.isBestSeller && (
          <Badge className="absolute left-3 top-3 z-10 bg-gold text-white">Best Seller</Badge>
        )}
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="text-center">
            <div className="mb-2 text-4xl">✨</div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 font-semibold text-foreground">{product.name}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{product.benefits}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-gold">₹{Number(product.price).toLocaleString()}</span>
          <Button
            size="sm"
            className="bg-gold hover:bg-gold/90"
            onClick={handleAddToCart}
            disabled={addToCartMutation.isPending}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
