/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DashboardHeader from './component/Header.component';
import Container from '../../container-layouts/Container.layout';
import DashboardContent from './component/DashboardContent';
import useDashboard from './hooks/useDashboard.hook';

const Dashboard = () => {
  const {} = useDashboard();
  return (
    <Container containerStyle={{paddingTop: 15}}>
      <DashboardHeader />
      <DashboardContent />
    </Container>
  );
};

export default Dashboard;
