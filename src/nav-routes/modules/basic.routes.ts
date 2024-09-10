import Dashboard from '../../screens/dashboard/Dashboard.m';
import Home from '../../screens/splash/Home.module';
import Splash from '../../screens/splash/Splash.module';
import {_routeProps} from '../../types/common.types';
import {screens} from '../routeName.routes';

const basicRoutes: Array<_routeProps> = [
  {
    accessLabel: 0,
    component: Splash,
    isHide: false,
    name: screens.splash,
  },
  {
    accessLabel: 0,
    component: Dashboard,
    isHide: false,
    name: screens.dashboard,
  },
  {
    accessLabel: 0,
    component: Home,
    isHide: false,
    name: screens.home,
  },
];

export default basicRoutes;
