import { configureStore } from '@reduxjs/toolkit';
import { Persistor as Persister } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { rootReducer } from './root-reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

const persistedStore: Persister = persistStore(store);

export const persister = persistedStore;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
