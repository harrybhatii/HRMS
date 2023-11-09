import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Holidays from '../Holidays';
import AssetManage from '../../tabsScreen/AssetManage';
import Attendance from '../../tabsScreen/Attendance';
import EmployeOnbording from '../../tabsScreen/EmployeOnbording';
import HRReportsData from '../../tabsScreen/HR-Reports&Data';
import Leave from '../../tabsScreen/Leave';
import Payroll from '../../tabsScreen/Payroll';
import Performance from '../../tabsScreen/Performance';
import photoAttandance from '../../tabsScreen/photoAttandance';
import ProjectTask from '../../tabsScreen/ProjectTask';
import punchAttandance from '../../tabsScreen/punchAttandance';
import RecruitmentHireing from '../../tabsScreen/Recruitment&hireing';
import Shift from '../../tabsScreen/Shift';
import TravelExpense from '../../tabsScreen/Travel&expense';
import WorkFromHome from '../../tabsScreen/WorkFromHome';



const Stack = createStackNavigator()

const CardsNavigation = () => {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AssetManage' component={AssetManage} />
      <Stack.Screen name='Attendance' component={Attendance} />
      <Stack.Screen name='EmployeOnbording' component={EmployeOnbording} />
      <Stack.Screen name='HrReports' component={HRReportsData} />
      <Stack.Screen name='Leave' component={Leave} />
      <Stack.Screen name='Payroll' component={Payroll} />
      <Stack.Screen name='Performance' component={Performance} />
      <Stack.Screen name='PhotoAttendance' component={photoAttandance} />
      <Stack.Screen name='ProjectTask' component={ProjectTask} />
      <Stack.Screen name='PunchAttendance' component={punchAttandance} />
      <Stack.Screen name='RecruitmentHireing' component={RecruitmentHireing} />
      <Stack.Screen name='Shift' component={Shift} />
      <Stack.Screen name='TravelExpense' component={TravelExpense} />
      <Stack.Screen name='WorkfromHome' component={WorkFromHome} />

    </Stack.Navigator>
  )
};

export default React.memo(CardsNavigation);