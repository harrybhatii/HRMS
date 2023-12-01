import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MasterDetails from '../ProfileTabs/MasterDetails';
import Qualification from '../ProfileTabs/Qualification';
import PersonalDetails from '../ProfileTabs/PersonalDetails';
import FamilyMembers from '../ProfileTabs/FamilyMembers';
import WorkExperience from '../ProfileTabs/WorkExperience';
import MiscDocuments from '../ProfileTabs/MiscDocuments';
import SkillsAndHobbies from '../ProfileTabs/SkillsAndHobbies';
import MedicalInsurance from '../ProfileTabs/MedicalInsurance';
import Statutory from '../ProfileTabs/Statutory';
import colors from '../../../../constants/colors';
import styles from './style';

const ProfileTab = () => {
  const [activeButton, setActiveButton] = useState('Master Details');
  const navigation = useNavigation();

  const renderContent = () => {
    if (activeButton === 'Master Details') {
      return <MasterDetails />;
    }else if(activeButton === "Qualification"){
      return <Qualification/>
    }else if(activeButton === "PersonalDetails"){
      return <PersonalDetails/>
    }else if (activeButton==="FamilyMembers"){
      return<FamilyMembers/>
    }
    else if (activeButton==="WorkExperience"){
      return<WorkExperience/>
    }
    else if (activeButton==="MiscDocuments"){
      return<MiscDocuments/>
    }else if (activeButton==="SkillsAndHobbies"){
      return<SkillsAndHobbies/>
    }
    else if(activeButton==="MedicalInsurance"){
      return<MedicalInsurance/>
    }
    else if(activeButton==="Statutory"){
      return<Statutory/>
    }
  };

  return (
    <View>
      <View style={styles.header}>
      <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={{color:colors.white , padding:16,fontSize:20}}>
          
          Profile
          
        </Text>
      </View>
         <View style={styles.tab}>  
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('Master Details')}>
        <Text style={[ styles.tabText,{color: activeButton === 'Master Details' ? '#00ACEE' : '#929094' },]}>Master Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('PersonalDetails')}>
          <Text style={[ styles.tabText,{color: activeButton === 'PersonalDetails' ? '#00ACEE' : '#929094' }]}>PersonalDetails</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('Qualification')}>
          <Text style={[ styles.tabText,{color: activeButton === 'Qualification' ? '#00ACEE' : '#929094' }]}>Qualification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('FamilyMembers')}>
          <Text style={[ styles.tabText,{color: activeButton === 'FamilyMembers' ? '#00ACEE' : '#929094' }]}>FamilyMembers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('WorkExperience')}>
          <Text style={[ styles.tabText,{color: activeButton === 'WorkExperience' ? '#00ACEE' : '#929094' }]}>WorkExperience</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('MiscDocuments')}>
          <Text style={[ styles.tabText,{color: activeButton === 'MiscDocuments' ? '#00ACEE' : '#929094' }]}>MiscDocuments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('SkillsAndHobbies')}>
          <Text style={[ styles.tabText,{color: activeButton === 'SkillsAndHobbies' ? '#00ACEE' : '#929094' }]}>SkillsAndHobbies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('MedicalInsurance')}>
          <Text style={[ styles.tabText,{color: activeButton === 'MedicalInsurance' ? '#00ACEE' : '#929094' }]}>MedicalInsurance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.text} onPress={() => setActiveButton('Statutory')}>
          <Text style={[ styles.tabText,{color: activeButton === 'Statutory' ?'#00ACEE' : '#929094' }]}>Statutory</Text>
        </TouchableOpacity>

       
        </ScrollView> 
      </View>
      {renderContent()}
    </View>
  );
};
export default ProfileTab;

