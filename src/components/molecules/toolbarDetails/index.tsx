import React from 'react';
import {ButtonIcon} from '../../atoms';
import {Images} from '../../_settings';
import {Wrapper} from './style';

type Props = {
  onBack(): void;
  onLike(): void;
};

const ToolbarDetail: React.FC<Props> = ({onBack, onLike}) => {
  return (
    <Wrapper>
      <ButtonIcon onPress={onBack} source={Images.BACK} size={22} />
      <ButtonIcon onPress={onLike} source={Images.HEART} size={20} />
    </Wrapper>
  );
};

export default ToolbarDetail;
