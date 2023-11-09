import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import Login from './screens/auth/Login';
import User from './screens/app/UserNavigation';
import Profile from './screens/app/Tabs/Profile';

const Stack = createStackNavigator()


const Routes = () => {
    
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
  )
}

export default React.memo(Routes);
