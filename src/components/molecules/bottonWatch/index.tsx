import React from 'react';
import {ContainerButton, TextButton} from './style';
import {ButtonText} from '../../atoms';

type Props = {
  value: string;
  onPress(): void;
};

const ButtonWatch: React.FC<Props> = ({onPress, value}) => {
  return (
    <ButtonText
      onPress={onPress}
      value={value || '-'}
      styleText={TextButton}
      styleContainer={ContainerButton}
    />
  );
};
export default ButtonWatch;
