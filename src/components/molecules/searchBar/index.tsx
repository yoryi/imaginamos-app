import React from 'react';
import {inputSearch} from './style';
import {Input} from '../../atoms';
import THEME from '../../../themes';
import {useSelector} from 'react-redux';

type Props = {
  placeholder: string;
};

const SearchBar: React.FC<Props> = ({placeholder}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  const renderUI = () => {
    return (
      <Input
        style={[
          {
            backgroundColor: stateRedux.isDark
              ? THEME.darkTheme.backgroundToolbarSearch
              : THEME.ligthTheme.backgroundToolbarSearch,
            color: stateRedux.isDark
              ? THEME.darkTheme.textSearch
              : THEME.ligthTheme.textSearch,
          },
          inputSearch,
        ]}
        placeholder={placeholder || '-'}
        placeholderTextColor={
          stateRedux.isDark
            ? THEME.darkTheme.textSearchPlaceholder
            : THEME.ligthTheme.textSearchPlaceholder
        }
      />
    );
  };
  return renderUI();
};

export default SearchBar;
