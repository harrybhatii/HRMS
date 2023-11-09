import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can import icons from other icon libraries as well
import DashboardTab from '../Tabs/Dashboard';
import StatusTab from '../Tabs/Status';
import MessageTab from '../Tabs/Message';
import ProfileTab from '../Tabs/Profile';

const Tab = createBottomTabNavigator();

const User = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Status',
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Dashboard = () => {
  return (
    <View>
      <DashboardTab />
    </View>
  );
};

const Status = () => {
  return (
    <View>
      <StatusTab />
    </View>
  );
};

const Message = () => {
  return (
    <View>
      <MessageTab />
    </View>
  );
};

const Profile = () => {
  return (
    <View>
      <ProfileTab />
    </View>
  );
};

export default React.memo(User);
