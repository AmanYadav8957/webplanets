export interface Product {
  id: string;
  title: string;
  category: 'Enterprise Printer' | 'Scanners' | 'Small and Medium Office';
  categoryLabel?: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
}

export type SortOption = 'default' | 'price-low' | 'price-high' | 'name';
