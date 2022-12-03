import {View, NativeModules} from 'react-native';
import styled from 'styled-components/native';

const {StatusBarManager} = NativeModules;
const heightBar = StatusBarManager.HEIGHT;

const Wrapper = styled(View)`
  height: ${`${heightBar}px`};
  background-color: ${(props: any) => props.background};
`;

export {Wrapper};
