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


const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Master Details" component={MasterDetailsTab} />
      <Tab.Screen name="Professional Details" component={ProfessionalDetailsTab} />
      <Tab.Screen name="Qualification" component={QualificationTab} />
      <Tab.Screen name="Family Details" component={FamilyTab} />
      <Tab.Screen name="Work Experience" component={WorkExperienceTab} />
      <Tab.Screen name="Misc Documents" component={MiscDocumentsTab} />
      <Tab.Screen name="Skills And Hobbies" component={SkillsAndHobbiesTab} />
      <Tab.Screen name="Medical Insurance" component={MedicalInsuranceTab} />
      <Tab.Screen name="Statutory" component={StatutoryTab} />
    </Tab.Navigator>
  );
};

const MasterDetailsTab=()=>{
return(
  <MasterDetails/>
)
};
const ProfessionalDetailsTab = () => {
  return (
    <ProfessionalDetails/>
  )
};

const QualificationTab = () => {
  return (
    <Qualification/>
  )
};

const FamilyTab = () => {
  return (
    <FamilyDetails/>
  )
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