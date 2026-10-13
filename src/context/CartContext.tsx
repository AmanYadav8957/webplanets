import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountAmount: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: { id: string; title: string; price: number; image: string }, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  discount: number;
  total: number;
  totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Initial sample cart matching user's reference mockup (dynamic & interactive)
const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'hp-deskjet-2825e',
    title: 'HP DeskJet 2825e All-in-One Printer',
    price: 59.99,
    image: '/products/hp_deskjet_white.jpg',
    quantity: 1,
  },
  {
    id: 'hp-scanjet-ent-flow-n6600',
    title: 'HP ScanJet Ent Flow N6600 fnw1 Scanner',
    price: 1709.00, // unit price, x2 = 3418.00 in total
    image: '/products/hp_scanjet.jpg',
    quantity: 2,
  },
  {
    id: 'hp-scanjet-pro-2000',
    title: 'HP ScanJet Pro 2000 s2 Scanner',
    price: 1709.00,
    image: '/products/hp_scanjet.jpg',
    quantity: 1,
  },
];

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Optional localStorage persistence (can easily be replaced with API sync)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('webplanets_cart');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore error
        }
      }
    }
    return INITIAL_CART_ITEMS;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>({
    code: 'cart10',
    discountAmount: 10.0,
  });

  // Sync to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('webplanets_cart', JSON.stringify(items));
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  /**
   * Add a product to cart.
   * Future API integration point:
   * await fetch('/api/cart/items', { method: 'POST', body: JSON.stringify({ productId, quantity }) })
   */
  const addToCart = (
    product: { id: string; title: string; price: number; image: string },
    quantity = 1
  ) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  };

  /**
   * Update quantity of an item (+1 or -1).
   * Future API integration point:
   * await fetch(`/api/cart/items/${id}`, { method: 'PATCH', body: JSON.stringify({ quantity }) })
   */
  const updateQuantity = (id: string, delta: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  /**
   * Remove item from cart.
   * Future API integration point:
   * await fetch(`/api/cart/items/${id}`, { method: 'DELETE' })
   */
  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  /**
   * Apply coupon code.
   * Future API integration point:
   * await fetch('/api/cart/coupon', { method: 'POST', body: JSON.stringify({ code }) })
   */
  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const cleanCode = code.trim().toLowerCase();
    if (cleanCode === 'cart10' || cleanCode === 'cart100') {
      const discountVal = cleanCode === 'cart100' ? 100 : 10;
      setAppliedCoupon({ code: cleanCode, discountAmount: discountVal });
      return { success: true, message: `Coupon "${cleanCode}" applied successfully!` };
    }
    return { success: false, message: 'Invalid coupon code. Try "cart10" or "cart100"' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = appliedCoupon ? Math.min(appliedCoupon.discountAmount, subtotal) : 0;
  const total = Math.max(0, subtotal - discount);
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discount,
        total,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
