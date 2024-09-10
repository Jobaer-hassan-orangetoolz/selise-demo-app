/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useMemo} from 'react';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {useDispatch, useSelector} from 'react-redux';
import {dashboardStates} from '../../../redux/allSelector.state';
import EachDashboardItem from './EachDashboardItem';
import {colors} from '../../../assets/styles/colors.style.asset';
import EmptyContent from '../../../components/empty-content/EmptyContent.component';
import {isGettingMore} from '../../../redux/modules/dashboard/dashboard.slice.m';

const DashboardContent = () => {
  const {list, hasMore, isLoading, refreshing, onRefresh} =
    useSelector(dashboardStates);
  const dispatch = useDispatch();
  const renderItem = ({item, index}: any) => {
    return (
      <EachDashboardItem item={item} key={index.toString()} index={index} />
    );
  };
  const memoizedRender = useMemo(() => renderItem, []);
  const loadMore = () => {
    hasMore && dispatch(isGettingMore());
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list || []}
        renderItem={memoizedRender}
        keyboardDismissMode="on-drag"
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        initialNumToRender={4}
        ListFooterComponent={
          hasMore ? (
            <View style={{height: 30}}>
              <ActivityIndicator color={colors.orange} />
            </View>
          ) : undefined
        }
        ListEmptyComponent={
          <EmptyContent forLoading={isLoading} text={'No Posts Found!'} />
        }
        contentContainerStyle={
          list?.length > 0 ? {} : globalStyles.emptyFlexBox
        }
        //@TODO refresh behavior
        refreshing={refreshing}
        onRefresh={onRefresh}
        // TODO: on scroll data fetch
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default DashboardContent;
const styles = StyleSheet.create({
  container: {
    ...customPadding(12, 20, 0, 20),
    flex: 1,
  },
});
