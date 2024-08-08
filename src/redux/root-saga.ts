import { all } from 'redux-saga/effects';
import { dataSaga } from './data/saga';

const rootSaga = function* () {
  yield all([...dataSaga]);
};

export default rootSaga;
