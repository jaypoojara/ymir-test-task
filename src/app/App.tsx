import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/store';
import { useEffect } from 'react';
import { initItemsAction } from '../redux/productData/slice';

function App() {
  const loadState = useAppSelector((store) => store.data.initLoadState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadState === 'empty') {
      dispatch(initItemsAction());
    }
  }, [dispatch, loadState]);

  return <Outlet />;
}

export default App;
