import { combineReducers, Reducer } from '@reduxjs/toolkit';
import persistReducer, {
  PersistPartial,
} from 'redux-persist/es/persistReducer';
import { DATA, DataSlice } from './data/type';
import localForage from 'localforage';
import { dataReducer } from './data/slice';

type RootSlice = {
  data: Reducer<DataSlice & PersistPartial>;
};

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: new Array<string>(),
  blacklist: [DATA],
};

const reducer = combineReducers<RootSlice>({
  data: dataReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
