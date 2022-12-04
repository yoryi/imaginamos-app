import {Colors} from '../../_settings';
import {useSelector} from 'react-redux';
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
import THEME from '../../../themes';

type Props = {
  toolbar?: ReactElement<any>;
  searchBar?: ReactElement<any>;
  recommendedCard?: ReactElement<any>;
  recommendedTitle?: ReactElement<any>;
  topRatedTitle?: ReactElement<any>;
  topRatedCard?: ReactElement<any>;
};

const HomeTemplate: React.FC<Props> = ({
  toolbar,
  searchBar,
  recommendedCard,
  recommendedTitle,
  topRatedTitle,
  topRatedCard,
}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  const handleRemoveKeyboard = () => Keyboard.dismiss();

  const renderHeader = () => {
    return (
      <TouchableWithoutFeedback onPress={handleRemoveKeyboard}>
        <ContainerHeader
          background={
            stateRedux.isDark
              ? THEME.darkTheme.backgroundHeader
              : THEME.ligthTheme.backgroundHeader
          }>
          <ContainerTitle>{toolbar}</ContainerTitle>
          <ContainerSearch>{searchBar}</ContainerSearch>
        </ContainerHeader>
      </TouchableWithoutFeedback>
    );
  };

  const renderBody = () => {
    return (
      <ContainerBody
        background={
          stateRedux.isDark
            ? THEME.darkTheme.background
            : THEME.ligthTheme.background
        }>
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
        <StatusBar />
        {renderHeader()}
        {renderBody()}
      </Wrapper>
    );
  };

  return renderUI();
};
export default HomeTemplate;
