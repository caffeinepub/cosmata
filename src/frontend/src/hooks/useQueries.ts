import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Product, Cart } from '../backend';
import { toast } from 'sonner';

export function useGetBestSellers() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['bestSellers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBestSellers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['allProducts'],
    queryFn: async () => {
      if (!actor) return [];
      const bestSellers = await actor.getBestSellers();
      // Since we only have getBestSellers, we'll use it for all products
      // In a real app, you'd have a separate getAllProducts method
      return bestSellers;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCart() {
  const { actor, isFetching } = useActor();

  return useQuery<Cart>({
    queryKey: ['cart'],
    queryFn: async () => {
      if (!actor) return { items: [], total: BigInt(0) };
      try {
        return await actor.getCart();
      } catch (error) {
        // Return empty cart if not found
        return { items: [], total: BigInt(0) };
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useAddToCart() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, quantity }: { productId: bigint; quantity: bigint }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.addToCart(productId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Product added to cart!');
    },
    onError: (error) => {
      toast.error('Failed to add product to cart');
      console.error('Add to cart error:', error);
    },
  });
}

export function useClearCart() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.clearCart();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Cart cleared');
    },
    onError: (error) => {
      toast.error('Failed to clear cart');
      console.error('Clear cart error:', error);
    },
  });
}
