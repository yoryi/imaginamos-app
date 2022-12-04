import React from 'react';
import {Wrapper} from './style';
import THEME from '../../../themes';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const StatusBarAPP: React.FC = () => {
  const stateRedux = useSelector(state => state.ModeApp);
  return (
    <Wrapper
      background={
        stateRedux.isDark
          ? THEME.darkTheme.backgroundStatusBar
          : THEME.ligthTheme.backgroundStatusBar
      }>
      <StatusBar
        barStyle={stateRedux.isDark ? 'light-content' : 'dark-content'}
        backgroundColor={
          stateRedux.isDark
            ? THEME.darkTheme.backgroundStatusBar
            : THEME.ligthTheme.backgroundStatusBar
        }
      />
    </Wrapper>
  );
};

export default StatusBarAPP;
