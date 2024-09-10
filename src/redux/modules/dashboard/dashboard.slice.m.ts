import {createSlice} from '@reduxjs/toolkit';

import {
  _commonStatesP,
  _moduleReducers,
} from '../../../types/redux/commonState.types';
import commonStates from '../../commonState.state';
import sliceName from '../../sliceName.state';
import commonReducers from '../../commonReducer.state';

const initialState: _commonStatesP = {
  ...commonStates,
};

const dashboardSlice = createSlice({
  name: sliceName.dashboard,
  initialState: initialState,
  reducers: {
    ...commonReducers,
    clearAction: (state: _commonStatesP) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
    queryChange: (state: _commonStatesP, {payload}: any) => {
      const {page, perPage} = payload || {
        page: 1,
        perPage: 10,
      };
      state.isLoading = true;
      state.hasMore = false;
      state.page = page;
      state.perPage = perPage;
      state.search = payload?.search || state.search;
      state.category = payload?.category || state.category;
      state.order = payload?.order || state.category;
      state.price = payload?.price || state.category;
      state.rating = payload?.rating || state.category;
      state.list = [];
    },
    addItem: (state: _commonStatesP, {payload}: any) => {
      state.list = [payload, ...state.list];
    },
    loveItem: (state: _commonStatesP, {payload}: any) => {
      const {index, status} = payload;
      state.list[index] = {
        ...state.list[index],
        liked: status,
        likes: status
          ? state.list[index].likes - 1
          : state.list[index].likes + 1,
      };
    },
  },
});

export const {
  isGettingSuccess,
  isGettingError,
  isGetting,
  queryChange,
  clearAction,
  isGettingMore,
  isRefresh,
  addAction,
  addItem,
  loveItem,
}: _moduleReducers = dashboardSlice.actions;

export default dashboardSlice.reducer;
