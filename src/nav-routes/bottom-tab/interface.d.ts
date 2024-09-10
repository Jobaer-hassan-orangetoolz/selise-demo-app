import {screens} from '../../routes/routeName.routes';
import {_iconProps} from '../../types/icons.types';

interface _bottomTabInterface {
  Icon: React.FC<_iconProps>;
  route: screens;
  Component: React.FC;
  text: string;
}

export type {_bottomTabInterface};
