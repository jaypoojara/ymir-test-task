import './App.css';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { initItemsAction } from '../redux/data/slice';

function App() {
  const loadState = useSelector((store: RootState) => store.data.initLoadState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadState === 'empty') {
      dispatch(initItemsAction());
    }
  }, [dispatch, loadState]);

  return <Outlet />;
}

export default App;
