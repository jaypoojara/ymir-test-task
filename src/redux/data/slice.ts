import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA, DataSlice } from './type';
import localForage from 'localforage';
import persistReducer from 'redux-persist/es/persistReducer';
import { initialDataState } from './initialState';
import { Item } from '../../models/common/Item';
import { Review } from '../../models/common/Review';
import moment from 'moment';

const dataSlice = createSlice({
  name: DATA,
  initialState: initialDataState,
  reducers: {
    resetLoadState: (state: DataSlice) => {
      state.initLoadState = 'empty';
    },
    initItemsAction: (state: DataSlice) => {
      state.initLoadState = 'loading';
    },

    initItemsSuccessAction: (
      state: DataSlice,
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
    initItemsErrorAction: (state: DataSlice) => {
      state.initLoadState = 'error';
    },

    addReview: (
      state: DataSlice,
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
  key: DATA,
  storage: localForage,
};

export const {
  resetLoadState,
  initItemsAction,
  initItemsSuccessAction,
  initItemsErrorAction,
  addReview,
} = dataSlice.actions;

export const dataReducer = persistReducer(persistConfig, dataSlice.reducer);
