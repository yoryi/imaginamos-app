/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, ImageSourcePropType} from 'react-native';

type Props = {
  style: object;
  source?: ImageSourcePropType;
  uri?: string;
};

const ImageApp: React.FC<Props> = ({style, source, uri}) => {
  const [image, setImage] = useState({});
  useEffect(() => {
    (source && setImage(source)) || (uri && setImage({uri: uri}));
  }, []);

  return <Image style={style} resizeMode={'stretch'} source={image} />;
};
export default ImageApp;
