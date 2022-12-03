import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './stack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default RootNavigator;
