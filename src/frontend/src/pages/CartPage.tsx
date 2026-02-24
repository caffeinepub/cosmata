import { useGetCart, useClearCart } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function CartPage() {
  const { data: cart, isLoading } = useGetCart();
  const clearCartMutation = useClearCart();
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCartMutation.mutate();
  };

  const handleCheckout = () => {
    navigate({ to: '/checkout' });
  };

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <Skeleton className="mb-8 h-12 w-48" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </section>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <section className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">Your Cart is Empty</h1>
        <p className="mb-8 text-muted-foreground">Add some products to get started!</p>
        <Button onClick={() => navigate({ to: '/shop' })} className="bg-gold hover:bg-gold/90">
          Shop Now
        </Button>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">Shopping Cart</h1>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">Product ID: {item.productId.toString()}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity.toString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button
            onClick={handleClearCart}
            variant="outline"
            className="mt-6"
            disabled={clearCartMutation.isPending}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cart
          </Button>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Order Summary</h2>
            <div className="mb-4 flex justify-between border-b border-border pb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold text-foreground">₹{Number(cart.total).toLocaleString()}</span>
            </div>
            <div className="mb-6 flex justify-between">
              <span className="font-serif text-lg font-bold text-foreground">Total</span>
              <span className="font-serif text-lg font-bold text-gold">₹{Number(cart.total).toLocaleString()}</span>
            </div>
            <Button onClick={handleCheckout} className="w-full bg-gold hover:bg-gold/90" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
