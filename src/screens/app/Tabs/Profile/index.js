import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MasterDetails from '../ProfileTabs/MasterDetails';
import Qualification from '../ProfileTabs/Qualification';
import ProfessionalDetails from '../ProfileTabs/ProfessionalDetails';
// Import your Contact content component

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
      {/* Top part with buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',gap:10, padding: 10 }}>
        <TouchableOpacity onPress={() => setActiveButton('Master Details')}>
          <Text style={{ fontSize: 20, color: activeButton === 'Master Details' ? 'blue' : 'black' }}>Master Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveButton('Qualification')}>
          <Text style={{ fontSize: 20, color: activeButton === 'Qualification' ? 'blue' : 'black' }}>Qualification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveButton('ProfessionalDetails')}>
          <Text style={{ fontSize: 20, color: activeButton === 'ProfessionalDetails' ? 'blue' : 'black' }}>ProfessionalDetails</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};
export default ProfileTab;

