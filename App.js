import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Routes';
import CardsNavigation from './src/screens/app/Tabs/CardsNavigation';


const App = () => {
  return(
    <>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    {/* <NavigationContainer>
      <CardsNavigation/>
    </NavigationContainer> */}
    </>
  )
};

export default App;
