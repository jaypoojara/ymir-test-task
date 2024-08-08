import { combineReducers, Reducer } from '@reduxjs/toolkit';
import persistReducer, {
  PersistPartial,
} from 'redux-persist/es/persistReducer';
import { DATA, DataSlice } from './data/type';
import localForage from 'localforage';
import { dataReducer } from './data/slice';
import { HOME, HomeSlice } from './home/type';
import { homeReducer } from './home/slice';

type RootSlice = {
  data: Reducer<DataSlice & PersistPartial>;
  home: Reducer<HomeSlice>;
};

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: new Array<string>(),
  blacklist: [DATA, HOME],
};

const reducer = combineReducers<RootSlice>({
  data: dataReducer,
  home: homeReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
