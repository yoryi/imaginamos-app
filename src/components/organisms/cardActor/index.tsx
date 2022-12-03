import React from 'react';
import {Text, Image} from '../../atoms';
import {
  Wrapper,
  StyleImage,
  StyleTitle,
  ContainerTitle,
  ContainerImage,
} from './style';

type Props = {
  uriAvatar: string;
  titleCard?: string;
};

const CardActor: React.FC<Props> = ({titleCard}) => {
  return (
    <Wrapper>
      <ContainerImage>
        <Image style={StyleImage} uri={''} />
      </ContainerImage>
      <ContainerTitle>
        <Text numberLine={2} style={StyleTitle} value={titleCard || '-'} />
      </ContainerTitle>
    </Wrapper>
  );
};
export default CardActor;
