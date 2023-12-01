import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import Login from './screens/auth/Login';
import User from './screens/app/UserNavigation';
import AssetManage from './screens/app/tabsScreen/AssetManage';
import Attendance from './screens/app/tabsScreen/Attendance';
import EmployeOnbording from './screens/app/tabsScreen/EmployeOnbording';
import HRReportsData from './screens/app/tabsScreen/HR-Reports&Data';
import photoAttandance from './screens/app/tabsScreen/photoAttandance';
import ProjectTask from './screens/app/tabsScreen/ProjectTask';
import punchAttandance from './screens/app/tabsScreen/punchAttandance';
import RecruitmentHireing from './screens/app/tabsScreen/Recruitment&hireing';
import Shift from './screens/app/tabsScreen/Shift';
import TravelExpense from './screens/app/tabsScreen/Travel&expense';
import WorkFromHome from './screens/app/tabsScreen/WorkFromHome';
import Performance from './screens/app/tabsScreen/Performance';
import Leave from './screens/app/tabsScreen/Leave';
import Profile from './screens/app/Tabs/Profile';
import Dashboard from './screens/app/Tabs/Dashboard';
import Payslip from './screens/app/tabsScreen/Payslip';
import MasterDetails from './screens/app/Tabs/ProfileTabs/MasterDetails';
import QualificationData from './screens/app/Tabs/ProfileTabs/QualificationData';
import Skills from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Skills';
import Hobbies from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Hobbies';
import Achievement from './screens/app/Tabs/ProfileTabs/SkillsandHobbiesData/Achievement';

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
      <Stack.Screen name='EmployeOnbording' component={EmployeOnbording} />
      <Stack.Screen name='HrReports' component={HRReportsData} />
      <Stack.Screen name='Leave' component={Leave} />
      <Stack.Screen name='Payroll' component={Payslip} />
      <Stack.Screen name='Performance' component={Performance} />
      <Stack.Screen name='PhotoAttendance' component={photoAttandance} />
      <Stack.Screen name='ProjectTask' component={ProjectTask} />
      <Stack.Screen name='PunchAttendance' component={punchAttandance} />
      <Stack.Screen name='RecruitmentHireing' component={RecruitmentHireing} />
      <Stack.Screen name='Shift' component={Shift} />
      <Stack.Screen name='TravelExpense' component={TravelExpense} />
      <Stack.Screen name='WorkfromHome' component={WorkFromHome} />
      <Stack.Screen name='Master Details' component={MasterDetails}/>
      <Stack.Screen name='QualificationData' component={QualificationData}/>
      <Stack.Screen name='DashboardTab' component={Dashboard}/>
      <Stack.Screen name='Skills' component={Skills}/>
      <Stack.Screen name='Hobbies' component={Hobbies}/>
      <Stack.Screen name='Achievement' component={Achievement}/>
    </Stack.Navigator>
  )
}

export default React.memo(Routes);
