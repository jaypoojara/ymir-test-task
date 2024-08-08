import { configureStore } from '@reduxjs/toolkit';
import { Persistor } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { rootReducer } from './root-reducer';

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

const persistedStore: Persistor = persistStore(store);

export const persister = persistedStore;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
