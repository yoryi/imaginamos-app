import React from 'react';
import {Image} from '../../atoms';
import {App} from '../../_settings';
import {Wrapper, StyleImage} from './style';

type Props = {
  uri: string;
};

const ButtonWatch: React.FC<Props> = ({uri}) => {
  return (
    <Wrapper>
      <Image style={StyleImage} uri={App.URI_IMAGE + uri} />
    </Wrapper>
  );
};
export default ButtonWatch;
