import {View} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const titleHome = {
  fontSize: 26,
  fontWeight: 'bold',
  color: Colors.WHITE,
  width: '80%',
};
export {titleHome, Wrapper};
