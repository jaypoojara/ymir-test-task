import { Item } from '../../models/common/Item';

export type DataSlice = {
  initLoadState: 'empty' | 'loading' | 'loaded' | 'error';
  items: Item[];
  categories: string[];
  reviews: [];
};

export const DATA = 'data';
