import React from 'react';
import {TextInput} from 'react-native';

type Props = {
  style: object;
  placeholder: string;
  placeholderTextColor: string;
};
const Input: React.FC<Props> = ({placeholder, style, placeholderTextColor}) => {
  return (
    <TextInput
      style={style}
      keyboardType={'default'}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default Input;
