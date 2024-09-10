import {all} from 'redux-saga/effects';
import dashboardSaga from './modules/dashboard/dashboard.saga.m';

export default function* rootSaga() {
  yield all([dashboardSaga()]);
}
