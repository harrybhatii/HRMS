import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
 
import colors from "../../../constants/colors";

//Tabs Screen imports

import Profile from "../Tabs/Profile";
import Birthday from "../tabsScreen/Birthday";
import Attendance from "../tabsScreen/Attendance";
import Holiday from "../tabsScreen/Holiday";
import Guidelines from "../tabsScreen/Guidelines";
import Announcement from "../tabsScreen/Announcement";
import Payslip from "../tabsScreen/Payslip";
import MissedPunchAttendance from "../tabsScreen/MissedPunchAttendance";
import Leave from "../tabsScreen/Leave";
import Dashboard from "../Tabs/Dashboard";

 
const Drawer = createDrawerNavigator();

 const DrawerNavigator = () => {
    return ( 
 <Drawer.Navigator 
    drawerStyle={{
      backgroundColor:colors.skyblue,
      
    }}>
      <Drawer.Screen name="HRMS Dashboard" component={Dashboard} />
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

export default React.memo(DrawerNavigator);
