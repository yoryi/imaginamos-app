import React from 'react';
import {Ratings} from '../../atoms';
import {DetailTemplate} from '../../template';
import {useNavigation} from '@react-navigation/native';
import {
  Content,
  TitleDetail,
  BottonWatch,
  ToolbarDetail,
  BackgroundPoster,
} from '../../molecules';

const DetailsMovie: React.FC = ({route}) => {
  const navigation = useNavigation();
  const handleOnLike = () => {};
  const handleOnBack = () => navigation.goBack();
  const {poster_path, original_title, overview, vote_average} = route?.params;

  const renderUI = () => {
    return (
      <DetailTemplate
        backgroundPostes={<BackgroundPoster uri={poster_path} />}
        content={<Content value={overview} />}
        toolbar={<ToolbarDetail onBack={handleOnBack} onLike={handleOnLike} />}
        title={<TitleDetail value={original_title} />}
        buttonWatch={<BottonWatch onPress={handleOnLike} value={'WATCH NOW'} />}
        ranting={<Ratings size={20} value={vote_average / 2} />}
      />
    );
  };
  return renderUI();
};

export default DetailsMovie;
