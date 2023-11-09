import * as React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import styles from "./style";
import AttractionCard from '../../../../Components/AttractionCard';
import colors from '../../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


const DashboardTab = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.profiletab}>
            <Icon name='person' size={60} color={colors.midgrey} />
            <View style={styles.profileData}>
              <Text style={styles.userInfo}>User Name=######</Text>
              <Text style={styles.userInfo}>User ID=######</Text>
            </View>

          </View>


          <View style={styles.container}>

            <View style={styles.row}>


              <AttractionCard
                title='Leave Management'
                iconName='person'
                onPress={() => navigation.navigate('Leave')}
              />
              <AttractionCard
                title="Attendance Management"
                iconName="date-range"
                onPress={() => navigation.navigate('Attendance')}
              />
              <AttractionCard
                title='Work from Home'
                iconName="work" 
                onPress={() => navigation.navigate('WorkfromHome')}
              />
              <AttractionCard
                title='Project task Management'
                iconName="assignment"
                onPress={() => navigation.navigate('ProjectTask')}
              />
              <AttractionCard
                title='Performance Management'
                iconName="assignment"
                onPress={() => navigation.navigate('Performance')}
              />
              <AttractionCard
                title='Asset Management'
                iconName="business"
                onPress={() => navigation.navigate('AssetManage')}
              />
              <AttractionCard
                title='Shift/Roster Management'
                iconName="schedule"
                onPress={() => navigation.navigate('Shift')}
              />
              <AttractionCard
                title='Employe On-Boarding Process'
                iconName="person-add"
                onPress={() => navigation.navigate('EmployeOnbording')}
              />
              <AttractionCard
                title='Recruitment And Hiring Process'
                iconName="people"
                onPress={() => navigation.navigate('RecruitmentHireing')}
              />
              <AttractionCard
                title='Travel & Expense Management'
                iconName="flight"
                onPress={() => navigation.navigate('TravelExpense')}
              />
              <AttractionCard
                title='Payroll Management'
                iconName="attach-money"
                onPress={() => navigation.navigate('Payroll')}
              />
              <AttractionCard
                title='HR Reports & Data Analytics'
                iconName="bar-chart"
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
