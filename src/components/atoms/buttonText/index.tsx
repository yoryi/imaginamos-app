import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {
  value?: string;
  onPress(): void;
  styleText?: object;
  styleContainer?: object;
};

const ButtonText: React.FC<Props> = ({
  value,
  onPress,
  styleText,
  styleContainer,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styleContainer}>
      <Text style={styleText}>{value}</Text>
    </TouchableOpacity>
  );
};
export default ButtonText;
