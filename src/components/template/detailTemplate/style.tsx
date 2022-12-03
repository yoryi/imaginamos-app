import {View} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${Colors.BLUE_DARK};
`;

const ContainerImage = styled(View)`
  height: 35%;
  background-color: blue;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const ContainerBody = styled(View)`
  flex: 1px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerTitle = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerRating = styled(View)`
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerContent = styled(View)`
  padding-top: 30px;
  flex-direction: row
  justify-content: space-between;
`;

const ContainerCardActor = styled(View)`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerItemDetail = styled(View)`
  margin-top: 30px;
  flex-direction: column;
`;

const ContainerToolbar = styled(View)`
  width: 100%;
  height: 150px;
  position: absolute;
`;

const BackgroundPoster = styled(View)`
  height: 100%;
  position: relative;
`;

export {
  Wrapper,
  ContainerBody,
  ContainerTitle,
  ContainerImage,
  ContainerRating,
  ContainerContent,
  ContainerToolbar,
  BackgroundPoster,
  ContainerCardActor,
  ContainerItemDetail,
};
