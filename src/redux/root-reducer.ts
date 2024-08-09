import { combineReducers, Reducer } from '@reduxjs/toolkit';
import persistReducer, {
  PersistPartial,
} from 'redux-persist/es/persistReducer';
import { PRODUCT_DATA, ProductDataSlice } from './productData/type';
import localForage from 'localforage';
import { productDataReducer } from './productData/slice';
import { HOME, HomeSlice } from './home/type';
import { homeReducer } from './home/slice';

type RootSlice = {
  data: Reducer<ProductDataSlice & PersistPartial>;
  home: Reducer<HomeSlice>;
};

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: new Array<string>(),
  blacklist: [PRODUCT_DATA, HOME],
};

const reducer = combineReducers<RootSlice>({
  data: productDataReducer,
  home: homeReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
