//@Imaginamos
//Developer: Jorginho Ojeda

import React from 'react';
import Router from './navegation';
import {store} from './redux/store';
import {Provider} from 'react-redux';

type Props = {};
const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
