import {View} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const titlePrimary = {
  fontSize: 14,
  color: Colors.WHITE,
};

const titleAll = {
  fontSize: 12,
  color: Colors.GRAY_50,
};
export {titlePrimary, titleAll, Wrapper};
