import React from 'react';
import {Text, Image, Ratings} from '../../atoms';
import {App} from '../../_settings';
import {
  Wrapper,
  StyleImage,
  StyleTitle,
  ContainerTitle,
  ContainerImage,
} from './style';

type Props = {
  onPress(): void;
  ratings: number;
  uriAvatar: string;
  titleCard?: string;
};

const CardMovie: React.FC<Props> = ({
  onPress,
  titleCard,
  ratings,
  uriAvatar,
}) => {
  return (
    <Wrapper onPress={onPress}>
      <ContainerImage>
        <Image style={StyleImage} uri={App.URI_IMAGE + uriAvatar} />
      </ContainerImage>
      <ContainerTitle>
        <Text numberLine={1} style={StyleTitle} value={titleCard || '-'} />
        <Ratings value={ratings} />
      </ContainerTitle>
    </Wrapper>
  );
};
export default CardMovie;
