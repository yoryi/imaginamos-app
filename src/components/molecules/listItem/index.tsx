import React from 'react';
import {Text} from '../../atoms';
import {titlePrimary, titleAll, Wrapper} from './style';

type Props = {
  title: string;
  all: string;
};

const ListItem: React.FC<Props> = ({title, all}) => {
  return (
    <Wrapper>
      <Text value={title || '-'} style={titlePrimary} />
      <Text value={all || '-'} style={titleAll} />
    </Wrapper>
  );
};
export default ListItem;
