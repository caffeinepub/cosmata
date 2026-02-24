import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Cart {
    total: bigint;
    items: Array<CartItem>;
}
export interface CartItem {
    productId: bigint;
    quantity: bigint;
}
export interface Product {
    id: bigint;
    name: string;
    category: string;
    benefits: string;
    image: string;
    price: bigint;
    isBestSeller: boolean;
}
export interface backendInterface {
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getBestSellers(): Promise<Array<Product>>;
    getCart(): Promise<Cart>;
    getProduct(id: bigint): Promise<Product>;
}
