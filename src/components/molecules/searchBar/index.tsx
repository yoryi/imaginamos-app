import React from 'react';
import {Input} from '../../atoms';
import {Colors} from '../../_settings';

type Props = {
  placeholder: string;
};
const SearchBar: React.FC<Props> = ({placeholder}) => {
  return (
    <Input
      style={{
        backgroundColor: '#8DBDDF',
        height: 45,
        borderRadius: 100,
        paddingLeft: 20,
        color: 'white',
      }}
      placeholder={placeholder || '-'}
      placeholderTextColor={Colors.WHITE_50}
    />
  );
};

export default SearchBar;
