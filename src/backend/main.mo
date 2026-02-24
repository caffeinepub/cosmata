import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    benefits : Text;
    price : Nat;
    image : Text;
    isBestSeller : Bool;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  type CartItem = {
    productId : Nat;
    quantity : Nat;
  };

  type Cart = {
    items : [CartItem];
    total : Nat;
  };

  let products = Map.fromIter<Nat, Product>([
    (
      1,
      {
        id = 1;
        name = "Hydrating Serum";
        category = "Serum";
        benefits = "Intensely hydrates skin for a radiant glow.";
        price = 3000;
        image = "serum.jpg";
        isBestSeller = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Gentle Cleanser";
        category = "Cleanser";
        benefits = "Removes impurities without drying.";
        price = 1500;
        image = "cleanser.jpg";
        isBestSeller = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Day Moisturizer";
        category = "Moisturizer";
        benefits = "Lightweight hydration for daily use.";
        price = 2500;
        image = "moisturizer.jpg";
        isBestSeller = false;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Acne Face Wash";
        category = "Face Wash";
        benefits = "Targets blemishes for clearer skin.";
        price = 1800;
        image = "facewash.jpg";
        isBestSeller = true;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Night Repair Serum";
        category = "Serum";
        benefits = "Repairs and rejuvenates overnight.";
        price = 3500;
        image = "nightserum.jpg";
        isBestSeller = false;
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Foaming Cleanser";
        category = "Cleanser";
        benefits = "Deep cleanses with a refreshing foam.";
        price = 1700;
        image = "foaming cleanser.jpg";
        isBestSeller = false;
      },
    ),
    (
      7,
      {
        id = 7;
        name = "Brightening Moisturizer";
        category = "Moisturizer";
        benefits = "Evens skin tone and brightens.";
        price = 2700;
        image = "brightmoisturizer.jpg";
        isBestSeller = true;
      },
    ),
    (
      8,
      {
        id = 8;
        name = "Exfoliating Face Wash";
        category = "Face Wash";
        benefits = "Gently exfoliates for smoother skin.";
        price = 1900;
        image = "exfoliatingfacewash.jpg";
        isBestSeller = false;
      },
    ),
  ].values());

  let carts = Map.empty<Principal, Cart>();

  public query ({ caller }) func getBestSellers() : async [Product] {
    products.values().toArray().filter(
      func(p) { p.isBestSeller }
    ).sort();
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    if (quantity == 0) { Runtime.trap("Quantity must be at least 1") };

    let product = switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };

    let cart = switch (carts.get(caller)) {
      case (null) { { items = []; total = 0 } };
      case (?existingCart) { existingCart };
    };

    let updatedItems = cart.items.concat([{ productId; quantity }]);
    let updatedTotal = cart.total + (product.price * quantity);

    let updatedCart = {
      items = updatedItems;
      total = updatedTotal;
    };

    carts.add(caller, updatedCart);
  };

  public shared ({ caller }) func getCart() : async Cart {
    switch (carts.get(caller)) {
      case (null) { Runtime.trap("Cart not found") };
      case (?cart) { cart };
    };
  };

  public shared ({ caller }) func clearCart() : async () {
    carts.remove(caller);
  };
};
