import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));



const App = () => {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    
  )
};

export default App;
