import { useState } from 'react';
import { useGetCart } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from '@tanstack/react-router';
import { CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const { data: cart } = useGetCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <section className="container mx-auto px-4 py-16 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-600" />
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">Order Placed Successfully!</h1>
        <p className="mb-8 text-muted-foreground">Thank you for shopping with Cosmata.</p>
        <Button onClick={() => navigate({ to: '/' })} className="bg-gold hover:bg-gold/90">
          Continue Shopping
        </Button>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">Checkout</h1>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Shipping Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" required className="mt-1" rows={3} />
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-gold hover:bg-gold/90" size="lg">
              Place Order
            </Button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Order Summary</h2>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Items</span>
                <span className="text-foreground">{cart?.items.length || 0}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">₹{Number(cart?.total || 0).toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-serif text-lg font-bold text-foreground">Total</span>
              <span className="font-serif text-lg font-bold text-gold">₹{Number(cart?.total || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
