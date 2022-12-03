import {Colors} from '../../_settings';
import React, {ReactElement} from 'react';
import {StatusBar} from '../../molecules';
import {Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {
  Wrapper,
  ContainerBody,
  ContainerTitle,
  ContainerSearch,
  ContainerHeader,
  ContainerSpace,
  ContainerTitleRecommend,
  ContainerMovieRecommend,
  ContainerTitleTopRated,
  ContainerMovieTopRated,
} from './style';

type Props = {
  title?: ReactElement<any>;
  searchBar?: ReactElement<any>;
  recommendedCard?: ReactElement<any>;
  recommendedTitle?: ReactElement<any>;
  topRatedTitle?: ReactElement<any>;
  topRatedCard?: ReactElement<any>;
};

const HomeTemplate: React.FC<Props> = ({
  title,
  searchBar,
  recommendedCard,
  recommendedTitle,
  topRatedTitle,
  topRatedCard,
}) => {
  const handleRemoveKeyboard = () => Keyboard.dismiss();
  const renderHeader = () => {
    return (
      <TouchableWithoutFeedback onPress={handleRemoveKeyboard}>
        <ContainerHeader>
          <ContainerTitle>{title}</ContainerTitle>
          <ContainerSearch>{searchBar}</ContainerSearch>
        </ContainerHeader>
      </TouchableWithoutFeedback>
    );
  };

  const renderBody = () => {
    return (
      <ContainerBody>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerTitleRecommend>{recommendedTitle}</ContainerTitleRecommend>
          <ContainerMovieRecommend>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {recommendedCard}
            </ScrollView>
          </ContainerMovieRecommend>

          <ContainerTitleTopRated>{topRatedTitle}</ContainerTitleTopRated>
          <ContainerMovieTopRated>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topRatedCard}
            </ScrollView>
          </ContainerMovieTopRated>
          <ContainerSpace size={100} />
        </ScrollView>
      </ContainerBody>
    );
  };

  const renderUI = () => {
    return (
      <Wrapper>
        <StatusBar backgroundColor={Colors.BLUE} mode={'light-content'} />
        {renderHeader()}
        {renderBody()}
      </Wrapper>
    );
  };

  return renderUI();
};
export default HomeTemplate;
