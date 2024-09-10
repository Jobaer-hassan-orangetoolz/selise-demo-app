import {all, call, put, select, takeEvery} from 'redux-saga/effects';
import sliceName from '../../sliceName.state';
import {_CustomPayload} from '../../../types/redux/commonState.types';
import {_dashboardList} from '../../../services/types/dashboard.type';
import {dashboardStates} from '../../allSelector.state';
import DashboardService from '../../../services/features/dashboard/dashboardService';
import {isGettingError, isGettingSuccess} from './dashboard.slice.m';

function* dashboard() {
  yield takeEvery(`${sliceName.dashboard}/isGetting`, isGettingSaga);
  yield takeEvery(`${sliceName.dashboard}/queryChange`, isGettingSaga);
  yield takeEvery(`${sliceName.dashboard}/isRefresh`, isGettingSaga);
  yield takeEvery(`${sliceName.dashboard}/pageChange`, isGettingSaga);
}
function* isGettingSaga({payload}: _CustomPayload<_dashboardList>): Generator {
  const {page, perPage}: any = yield select(dashboardStates);
  const _payload: _dashboardList = {
    page: page,
    perPage: perPage,
    order: payload?.order || 'recent',
  };
  const result = yield call(DashboardService.dashboardList, _payload);
  if (!result) {
    yield put(isGettingError());
    return;
  }
  yield put(isGettingSuccess({body: result}));
}

export default function* dashboardSaga() {
  yield all([dashboard()]);
}
