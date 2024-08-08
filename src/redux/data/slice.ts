import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA, DataSlice } from './type';
import localForage from 'localforage';
import persistReducer from 'redux-persist/es/persistReducer';
import { initialDataState } from './initialState';
import { Item } from '../../models/common/Item';

const dataSlice = createSlice({
  name: DATA,
  initialState: initialDataState,
  reducers: {
    initItemsAction: (state: DataSlice) => {
      state.initLoadState = 'loading';
    },

    initItemsSuccessAction: (
      state: DataSlice,
      { payload }: PayloadAction<Item[]>,
    ) => {
      state.items = [...payload];
      state.initLoadState = 'loaded';
    },
    initItemsErrorAction: (state: DataSlice) => {
      state.initLoadState = 'error';
    },
  },
});

const persistConfig = {
  key: DATA,
  storage: localForage,
};

export const { initItemsAction, initItemsSuccessAction, initItemsErrorAction } =
  dataSlice.actions;

export const dataReducer = persistReducer(persistConfig, dataSlice.reducer);
