import * as React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import styles from "./style";
import AttractionCard from '../../../../Components/AttractionCard';
import colors from '../../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const DashboardTab = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView> 
        <View style={{backgroundColor:colors.skyblue}} >
          <View style={styles.profiletab}>
            <Icon style={{borderWidth:1,borderRadius:100, backgroundColor:colors.white}} name='person' size={60} color={colors.red}  />
            <View style={styles.profileData}>
              <Text style={styles.userInfo}>User Name=######</Text>
              <Text style={styles.userInfo}>User ID=######</Text>
            </View>
          </View>

          <View style={styles.container}>       
            <View style={styles.row}>

              <AttractionCard
                title='Leave '
                iconName='person'
                onPress={() => {navigation.navigate('Leave')}}

              />
              <AttractionCard
                title="Attendance"
                iconName="date-range"
                onPress={() => navigation.navigate('Attendance')}
              />
              <AttractionCard
                title='Work from Home'
                iconName="work" 
                onPress={() => navigation.navigate('WorkfromHome')}
              />
              <AttractionCard
                title='Project task'
                iconName="assignment"
                onPress={() => navigation.navigate('ProjectTask')}
              />
              <AttractionCard
                title='Performance '
                iconName="assignment"
                onPress={() => navigation.navigate('Performance')}
              />
              <AttractionCard
                title='Asset '
                iconName="business"
                onPress={() => navigation.navigate('AssetManage')}
              />
              <AttractionCard
                title='Shift/Roster '
                iconName="schedule"
                onPress={() => navigation.navigate('Shift')}
              />
              <AttractionCard
                title='Employe On-Boarding '
                iconName="person-add"
                onPress={() => navigation.navigate('EmployeOnbording')}
              />
              <AttractionCard
                title='Recruitment And Hiring '
                iconName="people"
                onPress={() => navigation.navigate('RecruitmentHireing')}
              />
              <AttractionCard
                title='Travel & Expense '
                iconName="flight"
                onPress={() => navigation.navigate('TravelExpense')}
              />
              <AttractionCard
                title='Payroll '
                iconName="attach-money"
                onPress={() => navigation.navigate('Payroll')}
              />
              <AttractionCard
                title='HR Reports & Data Analytics'
                iconName="bar-chart"
                color=''
                onPress={() => navigation.navigate('HrReports')}
              />
            </View>          
          </View>        
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(DashboardTab);
