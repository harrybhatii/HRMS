import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FamilyDetails from '../ProfileTabs/FamilyDetails';
import ProfessionalDetails from '../ProfileTabs/ProfessionalDetails';
import Qualification from '../ProfileTabs/Qualification';
import WorkExperience from '../../tabsScreen/WorkExperience';
import MiscDocuments from '../ProfileTabs/MiscDocuments';
import SkillsAndHobbies from '../ProfileTabs/SkillsAndHobbies';
import MedicalInsurance from '../ProfileTabs/MedicalInsurance';
import Statutory from '../../tabsScreen/Statutory';
import MasterDetails from '../ProfileTabs/MasterDetails';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; // Import your desired icon libraries

const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue', // Color of the active tab label
        inactiveTintColor: 'gray', // Color of the inactive tab label
        style: { backgroundColor: 'white' }, // Background color of the tab bar
        indicatorStyle: { backgroundColor: 'blue' }, // Color of the indicator (line beneath the active tab)
        showIcon: true, // Show icons beside tab labels
      }}
    >
      <Tab.Screen
        name="Master Details"
        component={MasterDetailsTab}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Professional Details"
        component={ProfessionalDetailsTab}
        options={{
          tabBarLabel: 'Professional',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="briefcase" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Qualification"
        component={QualificationTab}
        options={{
          tabBarLabel: 'Qualification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-school" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Family Details"
        component={FamilyTab}
        options={{
          tabBarLabel: 'Family',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="family-restroom" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Work Experience'
        component={WorkExperienceTab}
        options={{
          tabBarLabel: 'Work',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='Work' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Misc Documents"
        component={MiscDocumentsTab}
        options={{
          tabBarLabel: 'Documents',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='Documents' size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Skills And Hobbies"
        component={SkillsAndHobbiesTab}
        options={{
          tabBarLabel: 'paint-brush',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='paint-brush' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Medical Insurance"
        component={MedicalInsuranceTab}
        options={{
          tabBarLabel: 'medkit',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='medkit' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Statutory"
        component={StatutoryTab}
        options={{
          tabBarLabel: 'balance-scale',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='balance-scale' size={24} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  );
};

const MasterDetailsTab = () => {
  return (
    <MasterDetails />
  );
};

const ProfessionalDetailsTab = () => {
  return (
    <ProfessionalDetails />
  );
};

const QualificationTab = () => {
  return (
    <Qualification />
  );
};

const FamilyTab = () => {
  return (
    <FamilyDetails />
  );
};

const WorkExperienceTab = () => {
  return (
    <WorkExperience />
  )
};

const MiscDocumentsTab = () => {
  return (
    <MiscDocuments />
  )
};

const SkillsAndHobbiesTab = () => {
  return (
    <SkillsAndHobbies />
  )
};

const MedicalInsuranceTab = () => {
  return (
    <MedicalInsurance />
  )
};

const StatutoryTab = () => {
  return (
    <Statutory />
  )
};

export default React.memo(ProfileTab);