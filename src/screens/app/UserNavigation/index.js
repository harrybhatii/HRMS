import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import styles from './style';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const User = () => {
  return (

    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.skyblue,
          paddingBottom: 10,
          paddingTop: 20,
          borderWidth: 1,
        },
      }}
    >
      <Drawer.Screen
        name="HRMS Dashboad"
        component={DashboardTab}
        options={{
          drawerLabel: 'HRMS Dashboad',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.picon} name="user" color={colors.midgrey} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="my Profile"
        component={Profile}
        options={{
          drawerLabel: 'My Profile',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Birthday"
        component={Birthday}
        options={{
          drawerLabel: 'Birthday',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Holiday" component={Holiday}
        options={{
          drawerLabel: 'Holiday',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Guidelines" component={Guidelines}
        options={{
          drawerLabel: 'Guidelines',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Announcement" component={Announcement}
        options={{
          drawerLabel: 'Announcement',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Payslip" component={Payslip}
        options={{
          drawerLabel: 'Payslip',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Leave Application" component={Leave}
        options={{
          drawerLabel: 'Leave Application',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Missed Punch Application" component={MissedPunchAttendance}
        options={{
          drawerLabel: 'Missed Punch Application',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

      <Drawer.Screen name="Attendance" component={Attendance}
        options={{
          drawerLabel: 'Attendance',
          drawerLabelStyle: { color: colors.white },
          drawerIcon: ({ size = 5 }) => (
            <Icon style={styles.icon} name="user" color={colors.red} size={size} />
          ),
        }} />

    </Drawer.Navigator>

  );
};


const TabNavgator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dashboard"
        component={User}
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

export default React.memo(TabNavgator);
