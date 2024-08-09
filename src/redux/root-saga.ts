import { all } from 'redux-saga/effects';
import { dataSaga } from './productData/saga';

const rootSaga = function* () {
  yield all([...dataSaga]);
};

export default rootSaga;
