import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MasterDetails from '../ProfileTabs/MasterDetails';
import Qualification from '../ProfileTabs/Qualification';
import ProfessionalDetails from '../ProfileTabs/ProfessionalDetails';

const ProfileTab = () => {
  const [activeButton, setActiveButton] = useState('Master Details');

  const renderContent = () => {
    if (activeButton === 'Master Details') {
      return <MasterDetails />;
    }else if(activeButton === "Qualification"){
      return <Qualification/>
    }else if(activeButton === "ProfessionalDetails"){
      return <ProfessionalDetails/>
    }
  };

  return (
    <View>
         <View style={{ flexDirection:'row', flex:0, width:"100%", justifyContent: 'space-between',gap:10, padding: 10 , borderWidth:1}}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setActiveButton('Master Details')}>
          <Text style={{ fontSize: 20, color: activeButton === 'Master Details' ? 'blue' : 'black' }}>Master Details</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setActiveButton('ProfessionalDetails')}>
          <Text style={{ fontSize: 20, color: activeButton === 'ProfessionalDetails' ? 'blue' : 'black' }}>ProfessionalDetails</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setActiveButton('Qualification')}>
          <Text style={{ fontSize: 20, color: activeButton === 'Qualification' ? 'blue' : 'black' }}>Qualification</Text>
        </TouchableOpacity>
       
        </ScrollView> 
      </View>
      {renderContent()}
    </View>
  );
};
export default ProfileTab;

