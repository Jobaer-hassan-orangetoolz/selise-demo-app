import HomeIcon from '../icons/HomeIcon.assets';
import {_bottomTabInterface} from '../../nav-routes/bottom-tab/interface';
import {screens} from '../../nav-routes/routeName.routes';
import Dashboard from '../../screens/dashboard/Dashboard.m';
import ProfileIcon from '../icons/Profile.icon.asset';
import ProfileIndex from '../../screens/profile/ProfileIndex';
const bottomTabDropdown: _bottomTabInterface[] = [
  {
    Icon: HomeIcon,
    route: screens.dashboard,
    Component: Dashboard,
    text: 'Home',
  },
  {
    Icon: ProfileIcon,
    route: screens.profile,
    text: 'Profile',
    Component: ProfileIndex,
  },
];

export {bottomTabDropdown};
