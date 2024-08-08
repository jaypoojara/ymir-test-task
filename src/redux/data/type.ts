import { Item } from '../../models/common/Item';

export type DataSlice = {
  initLoadState: 'empty' | 'loading' | 'loaded' | 'error';
  items: Item[];
  reviews: [];
};

export const DATA = 'data';
