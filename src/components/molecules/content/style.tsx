import {View, Text} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${Colors.BLUE_DARK};
`;

const TextContent = styled(Text)`
  color: white;
  font-size: 14px;
`;

export {Wrapper, TextContent};
