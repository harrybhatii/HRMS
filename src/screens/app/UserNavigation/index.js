import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can import icons from other icon libraries as well
import DashboardTab from '../Tabs/Dashboard';
import StatusTab from '../Tabs/Status';
import MessageTab from '../Tabs/Message';
import ProfileTab from '../Tabs/Profile';

//DrawerImports
import Setting from '../tabsScreen/Setting';
import Birthday from '../tabsScreen/Birthday/Index';
import Payroll from '../tabsScreen/Payroll';
import Performance from '../tabsScreen/Performance';
import ProjectTask from '../tabsScreen/ProjectTask';
import RecruitmentHireing from '../tabsScreen/Recruitment&hireing';
import Shift from '../tabsScreen/Shift';
import TravelExpense from '../tabsScreen/Travel&expense';
import Attendance from '../tabsScreen/Attendance';
import EmployeOnbording from '../tabsScreen/EmployeOnbording';
import Onboarding from '../../auth/Onboarding';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const User = () => {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="HRMS" component={TabNavigator} />
      <Drawer.Screen name="my Profile" component={Profile} />
      <Drawer.Screen name="Birthday" component={Birthday} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="EmployeONbording" component={EmployeOnbording} />
      <Drawer.Screen name="Payroll" component={Payroll} />
      <Drawer.Screen name="Performance" component={Performance} />
      <Drawer.Screen name="Project Task" component={ProjectTask} />
      <Drawer.Screen name="Recruitment & Hireing" component={RecruitmentHireing} />
      <Drawer.Screen name="Shift" component={Shift} />
      <Drawer.Screen name="Travel & Expense" component={TravelExpense} />
      <Drawer.Screen name="Attendance" component={Attendance} />
      
       
        <Drawer.Screen name='Logout' component={Onboarding} />
     
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
