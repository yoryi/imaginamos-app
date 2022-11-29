import React from 'react';
import {Text, View} from 'react-native';

export type Props = {};
const App: React.FC<Props> = () => {
  const renderHelloAPP = () => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };

  const renderUI = () => {
    return <View>{renderHelloAPP()}</View>;
  };
  return renderUI();
};
export default App;
