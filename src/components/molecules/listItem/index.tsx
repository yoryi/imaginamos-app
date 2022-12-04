import React from 'react';
import {Text} from '../../atoms';
import {useSelector} from 'react-redux';
import {titlePrimary, titleAll, Wrapper} from './style';
import THEME from '../../../themes';

type Props = {
  title: string;
  all: string;
};

const ListItem: React.FC<Props> = ({title, all}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  const renderUI = () => {
    return (
      <Wrapper>
        <Text
          value={title || '-'}
          style={[
            titlePrimary,
            {
              color: stateRedux.isDark
                ? THEME.darkTheme.text
                : THEME.ligthTheme.text,
            },
          ]}
        />
        <Text value={all || '-'} style={titleAll} />
      </Wrapper>
    );
  };

  return renderUI();
};
export default ListItem;
