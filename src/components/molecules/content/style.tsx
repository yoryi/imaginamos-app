import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  flex: 1;
`;

const TextContent = styled(Text)`
  font-size: 14px;
  color: ${(props: {color: string}) => props.color};
`;

export {Wrapper, TextContent};
