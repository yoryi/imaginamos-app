import React from 'react';
import {Text, ButtonIcon} from '../../atoms';
import APPIMAGE from '../../_settings/images';
import {titleHome, Wrapper} from './style';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {changeState} from '../../../redux/feature/mode';
import THEME from '../../../themes';

type Props = {
  value: string;
};

const TitleHome: React.FC<Props> = ({value}) => {
  const dispatch = useDispatch();
  const stateRedux = useSelector(state => state.ModeApp);
  const handleChangeMode = () => dispatch(changeState());

  const renderUI = () => {
    return (
      <Wrapper>
        <Text
          numberLine={2}
          value={value || '-'}
          style={[
            titleHome,
            {
              color: stateRedux.isDark
                ? THEME.darkTheme.text
                : THEME.ligthTheme.text,
            },
          ]}
        />
        <ButtonIcon
          size={25}
          onPress={handleChangeMode}
          source={stateRedux.isDark ? APPIMAGE.LIGTH_APP : APPIMAGE.DARK_APP}
        />
      </Wrapper>
    );
  };
  return renderUI();
};

export default TitleHome;
