import {combineReducers} from '@reduxjs/toolkit';
import sliceName from './sliceName.state';
import dashboardSliceM from './modules/dashboard/dashboard.slice.m';

const rootReducer = combineReducers({
  [sliceName.dashboard]: dashboardSliceM,
});
export default rootReducer;
