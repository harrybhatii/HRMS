import * as React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
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
            <Image 
            style={styles.profileimage}  
            source={require('../../../../assets/profilephoto.png')}
            />
            <View style={{flexDirection:'column',borderRightWidth:2,borderRightColor:'#ddd',paddingLeft:10,height:"100%"}}/>
            <View style={styles.profileData}>
              <Text style={styles.userInfo}>User Name= Ritesh </Text>
              <Text style={styles.userInfo}>User ID= 1234567</Text>
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
                title='Punch Attendance'
                iconName="fingerprint"
                onPress={() => navigation.navigate('PunchAttendance')}
              />
              <AttractionCard
                title='Camera Attendance '
                iconName="camera-alt"
                onPress={() => navigation.navigate('PhotoAttendance')}
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
                title='TDS Declaration'
                iconName="description"
                onPress={() => navigation.navigate('TDSDeclaration')}
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
