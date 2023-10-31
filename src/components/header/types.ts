import {ReactElement} from 'react';

export interface headerProps {
  title: string;
  hasBackButton?: boolean;
  onBackPress?: () => void;
  titleColor?: string;
  leftComponent?: ReactElement;
  hasBottomBorder?: boolean;
  onRightPress?: () => void;
  rightComponent?: ReactElement;
}
