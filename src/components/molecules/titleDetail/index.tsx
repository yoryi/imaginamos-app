import React from 'react';
import {Text} from '../../atoms';
import {titleDetail} from './style';

type Props = {
  value: string;
};

const TitleHome: React.FC<Props> = ({value}) => {
  return <Text value={value || '-'} style={titleDetail} />;
};

export default TitleHome;
