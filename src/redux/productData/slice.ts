import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PRODUCT_DATA, ProductDataSlice } from './type';
import localForage from 'localforage';
import persistReducer from 'redux-persist/es/persistReducer';
import { initialProductDataState } from './initialState';
import { Item } from '../../types/Item';
import { Review } from '../../types/Review';
import moment from 'moment';

const productDataSlice = createSlice({
  name: PRODUCT_DATA,
  initialState: initialProductDataState,
  reducers: {
    resetLoadState: (state: ProductDataSlice) => {
      state.initLoadState = 'empty';
    },
    initItemsAction: (state: ProductDataSlice) => {
      state.initLoadState = 'loading';
    },

    initItemsSuccessAction: (
      state: ProductDataSlice,
      { payload }: PayloadAction<Item[]>,
    ) => {
      const items = [...payload];

      const categories = Array.from(
        new Set(items.map((item) => item.category)),
      );

      state.items = [...items];
      state.categories = categories;
      state.initLoadState = 'loaded';
    },
    initItemsErrorAction: (state: ProductDataSlice) => {
      state.initLoadState = 'error';
    },

    addReview: (
      state: ProductDataSlice,
      { payload }: PayloadAction<Omit<Review, 'uniqueId'>>,
    ) => {
      const newReview: Review = {
        ...payload,
        uniqueId: moment().unix(),
      };
      state.reviews = [newReview, ...state.reviews];
    },
  },
});

const persistConfig = {
  key: PRODUCT_DATA,
  storage: localForage,
};

export const {
  resetLoadState,
  initItemsAction,
  initItemsSuccessAction,
  initItemsErrorAction,
  addReview,
} = productDataSlice.actions;

export const productDataReducer = persistReducer(persistConfig, productDataSlice.reducer);
