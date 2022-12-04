import React from 'react';
import {App} from '../../_settings';
import THEME from '../../../themes';
import {useSelector} from 'react-redux';
import {Text, Image, Ratings} from '../../atoms';
import {
  Wrapper,
  StyleImage,
  StyleTitle,
  ContainerTitle,
  ContainerImage,
} from './style';

type Props = {
  onPress(): void;
  ratings: number;
  uriAvatar: string;
  titleCard?: string;
};

const CardMovie: React.FC<Props> = ({
  onPress,
  titleCard,
  ratings,
  uriAvatar,
}) => {
  const stateRedux = useSelector(state => state.ModeApp);
  return (
    <Wrapper onPress={onPress}>
      <ContainerImage>
        <Image style={StyleImage} uri={App.URI_IMAGE + uriAvatar} />
      </ContainerImage>
      <ContainerTitle>
        <Text
          numberLine={1}
          style={[
            StyleTitle,
            {
              color: stateRedux.isDark
                ? THEME.darkTheme.text
                : THEME.ligthTheme.text,
            },
          ]}
          value={titleCard || '-'}
        />
        <Ratings value={ratings} />
      </ContainerTitle>
    </Wrapper>
  );
};
export default CardMovie;
