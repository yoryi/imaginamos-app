import {View} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  width: 80px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const ContainerImage = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;

const ContainerTitle = styled(View)`
  width: 100%;
  padding-top: 8px;
  align-items: center;
  justify-content: center;
`;

const StyleImage = {
  borderRadius: 100,
  width: '100%',
  height: '100%',
};

const StyleTitle = {
  fontSize: 12,
  paddingBottom: 3,
  color: Colors.WHITE,
  textAlign: 'center',
};

export {Wrapper, ContainerImage, ContainerTitle, StyleImage, StyleTitle};
