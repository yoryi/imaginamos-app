import React from 'react';
import {Text} from '../../atoms';
import {titleHome} from './style';

type Props = {
  value: string;
};

const TitleHome: React.FC<Props> = ({value}) => {
  return <Text value={value || '-'} style={titleHome} />;
};

export default TitleHome;
