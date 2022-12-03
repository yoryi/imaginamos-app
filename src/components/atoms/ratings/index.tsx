import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {styleRating} from './style';

type Props = {
  value?: number;
  size?: number;
};

const RatingsApp: React.FC<Props> = ({value, size}) => {
  return (
    <AirbnbRating
      count={5}
      size={size || 14}
      isDisabled={true}
      showRating={false}
      defaultRating={value}
      ratingContainerStyle={styleRating}
    />
  );
};
export default RatingsApp;
