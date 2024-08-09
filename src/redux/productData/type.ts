import { Item } from '../../types/Item';
import { Review } from '../../types/Review';

export type ProductDataSlice = {
  initLoadState: 'empty' | 'loading' | 'loaded' | 'error';
  items: Item[];
  categories: string[];
  reviews: Review[];
};

export const PRODUCT_DATA = 'data';
