import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from '../../redux/store';
import { ReactNode } from 'react';
import { resetLoadState } from '../../redux/data/slice';

type Props = {
  children: ReactNode;
}

const ProviderWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate
        onBeforeLift={() => {
          const state = store.getState();
          if (state.data.initLoadState !== 'loaded') {
            store.dispatch(resetLoadState());
          }
        }}
        persistor={persister}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
