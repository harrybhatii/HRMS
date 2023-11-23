import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can import icons from other icon libraries as well
import DashboardTab from '../../app/Tabs/Dashboard';
import StatusTab from '../../app/Tabs/Status';
import MessageTab from '../../app/Tabs/Message';
import ProfileTab from '../../app/Tabs/Profile';

//DrawerImports
import Birthday from "../tabsScreen/Birthday";
import Attendance from "../tabsScreen/Attendance";
import Holiday from "../tabsScreen/Holiday";
import Guidelines from "../tabsScreen/Guidelines";
import Announcement from "../tabsScreen/Announcement";
import Payslip from "../tabsScreen/Payslip";
import MissedPunchAttendance from "../tabsScreen/MissedPunchAttendance";
import Leave from "../tabsScreen/Leave";

import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../../../constants/colors';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const User = () => {
  return (

    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.skyblue,

      }}>
      <Drawer.Screen name="HRMS Dashboard" component={TabNavigator} />
      <Drawer.Screen name="my Profile" component={Profile} />
      <Drawer.Screen name="Birthday" component={Birthday} />
      <Drawer.Screen name="Holiday" component={Holiday} />
      <Drawer.Screen name="Guidelines" component={Guidelines} />
      <Drawer.Screen name="Announcement" component={Announcement} />
      <Drawer.Screen name="Payslip" component={Payslip} />
      <Drawer.Screen name="Leave Application" component={Leave} />
      <Drawer.Screen name="Missed Punch Application" component={MissedPunchAttendance} />
      <Drawer.Screen name="Attendance" component={Attendance} />
    </Drawer.Navigator>

  );
};
const TabNavigator = () => {
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
