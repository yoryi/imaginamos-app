import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../../_settings';

const Wrapper = styled(TouchableOpacity)`
  margin-right: 10px;
  padding-top: 15px;
  width: 128px;
`;

const ContainerImage = styled(View)`
  width: 100%;
  height: 140px;
`;

const ContainerTitle = styled(View)`
  width: 100%;
  padding-top: 15px;
`;

const StyleImage = {
  width: '90%',
  height: '100%',
  borderRadius: 10,
};

const StyleTitle = {
  fontSize: 15,
  paddingBottom: 3,
  color: Colors.WHITE,
};

export {Wrapper, ContainerImage, ContainerTitle, StyleImage, StyleTitle};
