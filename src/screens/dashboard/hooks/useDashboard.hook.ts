import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dashboardStates} from '../../../redux/allSelector.state';
import {
  isGetting,
  isRefresh,
} from '../../../redux/modules/dashboard/dashboard.slice.m';

const useDashboard = () => {
  const dispatch = useDispatch();
  const {list, isLoading, refreshing, firstRender} =
    useSelector(dashboardStates);
  useEffect(() => {
    if (!firstRender) {
      dispatch(isGetting());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    dispatch(isRefresh());
  };
  return {
    list,
    isLoading,
    refreshing,
    onRefresh,
  };
};

export default useDashboard;
