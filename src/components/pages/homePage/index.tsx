/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {CardMovie} from '../../organisms';
import {HomeTemplate} from '../../template';
import {useNavigation} from '@react-navigation/native';
import {SearchBar, ToolbarHeader, ListItem} from '../../molecules';

import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieRecomend} from '../../../redux/feature/movieRecomend';
import {fetchMovieTopRated} from '../../../redux/feature/movieTopRated';

const HomeMovie: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const stateRedux = useSelector((state) => state);
  const handleOnDetail = (response: object) => navigation.navigate('Details', response);

  const { movie } = stateRedux?.MovieRecomend;
  const { topRated } = stateRedux?.MovieTopRated;

  useEffect(() => {
    dispatch(fetchMovieRecomend());
    dispatch(fetchMovieTopRated());
  }, []);

  const renderCardRecomend = () => {
    return movie?.results?.map((response: { original_title: string; vote_average: number, poster_path: string  }, index: number) => {
      const { original_title, vote_average, poster_path } = response;
      return response && <CardMovie
      key={index}
      ratings={vote_average / 2}
      uriAvatar={poster_path}
      titleCard={original_title}
      onPress={() => handleOnDetail(response)}
    />;
    });
  };

  const renderCardTopRated = () => {
    return topRated?.results?.map((response: { original_title: string; vote_average: number, poster_path: string }, index: number) => {
      const { original_title, vote_average, poster_path } = response;
      return response && <CardMovie
      key={index}
      ratings={vote_average / 2}
      uriAvatar={poster_path}
      titleCard={original_title}
      onPress={() => handleOnDetail(response)}
    />;
    });
  };

  const renderUI = () => {
    return (
      <HomeTemplate
        searchBar={<SearchBar placeholder={'Search'} />}
        toolbar={<ToolbarHeader value={'Hello, what do you want to wacht ?'} />}
        topRatedCard={renderCardTopRated()}
        recommendedCard={renderCardRecomend()}
        topRatedTitle={<ListItem title={'TOP RATED'} all={'See All'} />}
        recommendedTitle={
          <ListItem title={'RECOMMEND FOR YOU'} all={'See All'} />
        }
      />
    );
  };
  return renderUI();
};

export default HomeMovie;
