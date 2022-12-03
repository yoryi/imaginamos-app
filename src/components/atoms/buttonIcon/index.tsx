import React from 'react';
import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';

type Props = {
  size?: number;
  onPress(): void;
  source?: ImageSourcePropType;
};

const ButtonIcon: React.FC<Props> = ({onPress, source, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={source}
        resizeMode={'contain'}
        style={{width: size, height: size}}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
