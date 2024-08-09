import axios, { AxiosResponse } from 'axios';
import {
  initItemsAction,
  initItemsErrorAction,
  initItemsSuccessAction,
} from './slice';
import { fork, put, takeLatest } from 'redux-saga/effects';
import { Item } from '../../types/Item';

function* loadItems() {
  try {
    const response: AxiosResponse<Item[], any> = yield axios.get<Item[]>(
      'https://fakestoreapi.com/products',
    );
    yield put(initItemsSuccessAction(response.data));
  } catch (error) {
    yield put(initItemsErrorAction());
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadItems() {
  yield takeLatest(initItemsAction, loadItems);
}

export const dataSaga = [fork(watchLoadItems)];
