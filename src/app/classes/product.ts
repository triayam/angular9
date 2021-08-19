export type ProductColor = 'blue' | 'green' | 'gray';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  currency?: string;
  colors?: ProductColor[];
  picture?: string;
  prodID?: string;
  productName?: string;
  productCost?: string;
  productLogo?: string;
  productMiniLogo?: string;
}

export interface ProductFilter {
  color?: ProductColor;
}

