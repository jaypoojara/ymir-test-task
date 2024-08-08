import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HOME, HomeSlice } from './type';
import { initialHomeState } from './initialState';

const homeSlice = createSlice({
  name: HOME,
  initialState: initialHomeState,
  reducers: {
    updateCategoryFilter: (
      state: HomeSlice,
      { payload }: PayloadAction<string[]>,
    ) => {
      state.categories = [...payload];
    },
    updatePriceFilter: (
      state: HomeSlice,
      { payload }: PayloadAction<number[]>,
    ) => {
      state.minAmount = payload[0];
      state.maxAmount = payload[1];
    },
  },
});

export const { updateCategoryFilter, updatePriceFilter } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
