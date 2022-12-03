import React from 'react';
import {Text} from 'react-native';

type PropsText = {
  value?: string;
  style?: object;
  numberLine?: number;
};

const TextApp: React.FC<PropsText> = ({value, style, numberLine}) => {
  return (
    <Text style={style} numberOfLines={numberLine}>
      {value}
    </Text>
  );
};
export default TextApp;
