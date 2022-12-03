import React from 'react';
import {Wrapper} from './style';
import {StatusBar} from 'react-native';

type Props = {
  mode: string;
  backgroundColor?: string;
};

const Title: React.FC<Props> = ({backgroundColor, mode}) => {
  return (
    <Wrapper background={backgroundColor || 'transparent'}>
      <StatusBar barStyle={mode} />
    </Wrapper>
  );
};

export default Title;
