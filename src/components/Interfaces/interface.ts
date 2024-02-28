export interface SpecialDealProduct {
    id: number;
    special: string[];
    title: string;
    description: string;
    original_price: number;
    discounted_price: number;
    discount_percentage: number;
    image: string;
  }