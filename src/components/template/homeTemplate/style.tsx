import {View} from 'react-native';
import {Colors} from '../../_settings';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  flex: 1;
`;

const ContainerHeader = styled(View)`
  height: 230px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${Colors.BLUE};
`;

const ContainerBody = styled(View)`
  flex: 1px;
  padding: 20px;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Colors.BLUE_DARK};
`;

const ContainerSpace = styled(View)`
  height: ${(props: {size: number}) => `${props.size}px`};
`;

const ContainerTitleRecommend = styled(View)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
`;

const ContainerMovieRecommend = styled(View)`
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
`;

const ContainerTitleTopRated = styled(View)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
`;

const ContainerMovieTopRated = styled(View)`
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
`;

const ContainerTitle = styled(View)`
  padding-right: 30%;
  padding-top: 30px;
`;

const ContainerSearch = styled(View)`
  padding-top: 25px;
`;

export {
  Wrapper,
  ContainerBody,
  ContainerTitle,
  ContainerSpace,
  ContainerSearch,
  ContainerHeader,
  ContainerTitleRecommend,
  ContainerMovieRecommend,
  ContainerTitleTopRated,
  ContainerMovieTopRated,
};
