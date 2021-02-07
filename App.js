/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {type StatelessFunctionalComponent} from 'react';
import {Provider} from 'react-redux';
import ScreenNavigations from './src/navigations/ScreenNavigations';
import store from './src/reducers/Store';

const App: StatelessFunctionalComponent<Node> = () => {
  return (
    <Provider store={store}>
      <ScreenNavigations />
    </Provider>
  );
};

export default App;
