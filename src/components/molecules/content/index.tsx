import React from 'react';
import {Wrapper, TextContent} from './style';
type Props = {
  value: string;
};

const Content: React.FC<Props> = ({value}) => {
  return (
    <Wrapper>
      <TextContent>{value}</TextContent>
    </Wrapper>
  );
};

export default Content;
