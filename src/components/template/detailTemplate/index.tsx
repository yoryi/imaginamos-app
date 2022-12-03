import React, {ReactElement} from 'react';
import {ScrollView} from 'react-native';
import {
  Wrapper,
  ContainerBody,
  ContainerTitle,
  ContainerImage,
  ContainerRating,
  ContainerContent,
  BackgroundPoster,
  ContainerToolbar,
  ContainerCardActor,
  ContainerItemDetail,
} from './style';

type Props = {
  title?: ReactElement<any>;
  ranting?: ReactElement<any>;
  content?: ReactElement<any>;
  toolbar?: ReactElement<any>;
  cardActor?: ReactElement<any>;
  buttonWatch?: ReactElement<any>;
  backgroundPostes?: ReactElement<any>;
};

const DetailsTemplate: React.FC<Props> = ({
  title,
  ranting,
  content,
  toolbar,
  cardActor,
  buttonWatch,
  backgroundPostes,
}) => {
  const renderHeader = () => {
    return (
      <ContainerImage>
        <BackgroundPoster>{backgroundPostes}</BackgroundPoster>
        <ContainerToolbar>{toolbar}</ContainerToolbar>
      </ContainerImage>
    );
  };

  const renderBody = () => {
    return (
      <ContainerBody>
        <ScrollView>
          <ContainerTitle>{title}</ContainerTitle>
          <ContainerRating>
            {buttonWatch}
            {ranting}
          </ContainerRating>
          <ContainerContent>{content}</ContainerContent>
          <ContainerCardActor>
            <ScrollView horizontal>{cardActor}</ScrollView>
          </ContainerCardActor>

          {/* <ContainerItemDetail>
            <Text>Item</Text>
            <Text>Detalles</Text>
          </ContainerItemDetail> */}
        </ScrollView>
      </ContainerBody>
    );
  };

  const renderUI = () => {
    return (
      <Wrapper>
        {renderHeader()}
        {renderBody()}
      </Wrapper>
    );
  };
  return renderUI();
};
export default DetailsTemplate;
