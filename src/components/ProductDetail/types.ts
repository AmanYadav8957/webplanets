import type { Product } from '../Shop/types';

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSpecification {
  category: string;
  value: string;
}

export interface ProductDetail extends Product {
  sku: string;
  tag: string;
  freeShipping: boolean;
  gallery: string[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
  couponAlert?: string;
}
