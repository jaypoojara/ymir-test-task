import { Item } from '../../models/common/Item';
import { Review } from '../../models/common/Review';

export type DataSlice = {
  initLoadState: 'empty' | 'loading' | 'loaded' | 'error';
  items: Item[];
  categories: string[];
  reviews: Review[];
};

export const DATA = 'data';
