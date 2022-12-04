import React from 'react';
import {Text} from 'react-native';
import THEME from '../../../themes';
import {useSelector} from 'react-redux';

type PropsText = {
  value?: string;
  style?: object;
  numberLine?: number;
};

const TextApp: React.FC<PropsText> = ({value, style, numberLine}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  return (
    <Text
      style={[
        style,
        {
          color: stateRedux.isDark
            ? THEME.darkTheme.text
            : THEME.ligthTheme.text,
        },
      ]}
      numberOfLines={numberLine}>
      {value}
    </Text>
  );
};
export default TextApp;
