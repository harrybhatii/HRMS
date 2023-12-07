import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import Login from './screens/auth/Login';
import User from './screens/app/UserNavigation';
import AssetManage from './screens/app/tabsScreen/AssetManage';
import Attendance from './screens/app/tabsScreen/Attendance';
import HRReportsData from './screens/app/tabsScreen/HR-Reports&Data';
import photoAttandance from './screens/app/tabsScreen/photoAttandance';
import punchAttandance from './screens/app/tabsScreen/punchAttandance';
import Shift from './screens/app/tabsScreen/Shift';
import TravelExpense from './screens/app/tabsScreen/Travel&expense';
import WorkFromHome from './screens/app/tabsScreen/WorkFromHome';
import Leave from './screens/app/tabsScreen/Leave';
import Profile from './screens/app/Tabs/Profile';
import Dashboard from './screens/app/Tabs/Dashboard';
import Payslip from './screens/app/tabsScreen/Payslip';
import MasterDetails from './screens/app/Tabs/ProfileTabs/MasterDetails';
import QualificationData from './screens/app/Tabs/ProfileTabs/QualificationData/DataInput';
import Skills from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Skills';
import Hobbies from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Hobbies';
import Achievement from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Achievement';
import TDSDecleration from './screens/app/tabsScreen/TDSDecleration';
import data from './screens/app/Tabs/ProfileTabs/QualificationData/Data/data';
import FamilyDataInput from './screens/app/Tabs/ProfileTabs/familyMembersdata/FamilyDataInput';
import workexpDataInput from './screens/app/Tabs/ProfileTabs/Workexperiencedata/workexpDataInput';

const Stack = createStackNavigator()


const Routes = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='User' component={User} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='AssetManage' component={AssetManage} />
      <Stack.Screen name='Attendance' component={Attendance} />
      <Stack.Screen name='HrReports' component={HRReportsData} />
      <Stack.Screen name='Leave' component={Leave} />
      <Stack.Screen name='Payroll' component={Payslip} />
      <Stack.Screen name='PhotoAttendance' component={photoAttandance} />
      <Stack.Screen name='PunchAttendance' component={punchAttandance} />
      <Stack.Screen name='TDSDeclaration' component={TDSDecleration} />
      <Stack.Screen name='Shift' component={Shift} />
      <Stack.Screen name='TravelExpense' component={TravelExpense} />
      <Stack.Screen name='WorkfromHome' component={WorkFromHome} />
      <Stack.Screen name='Master Details' component={MasterDetails}/>
      <Stack.Screen name='QualificationData' component={QualificationData}/>
      <Stack.Screen name='DashboardTab' component={Dashboard}/>
      <Stack.Screen name='Skills' component={Skills}/>
      <Stack.Screen name='Hobbies' component={Hobbies}/>
      <Stack.Screen name='Achievement' component={Achievement}/>
      <Stack.Screen name='Data' component={data}/>
      <Stack.Screen name='FamilyData' component={FamilyDataInput}/>
      <Stack.Screen name='WorkExpData' component={workexpDataInput}/>
    </Stack.Navigator>
  )
}

export default React.memo(Routes);
