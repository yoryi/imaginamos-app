import React from 'react';
import THEME from '../../../themes';
import {useSelector} from 'react-redux';
import {Wrapper, TextContent} from './style';

type Props = {
  value: string;
};

const Content: React.FC<Props> = ({value}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  const renderUI = () => {
    return (
      <Wrapper>
        <TextContent
          color={
            stateRedux.isDark ? THEME.darkTheme.text : THEME.ligthTheme.text
          }>
          {value}
        </TextContent>
      </Wrapper>
    );
  };
  return renderUI();
};

export default Content;
