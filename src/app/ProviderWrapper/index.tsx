import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from '../../redux/store';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProviderWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate persistor={persister}>{children}</PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
