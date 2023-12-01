import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Achievement from '../SkillsandHobbiesData/Achievement';
import Hobbies from '../SkillsandHobbiesData/Hobbies';
import Skills from '../SkillsandHobbiesData/Skills';

const SkillsAndHobbiesTab = () =>{

  const[activeButton, setActiveButton]=useState('SkillsData')


  const renderContent = () => {
    if (activeButton === "skills") {
      return <Skills/>
    }else if(activeButton === "Hobbies"){
      return <Hobbies/>
    }else if(activeButton === "Achievement")
    return <Achievement/> 
  }

    return (
      <View>
        <ScrollView horizontal>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };


export default React.memo(SkillsAndHobbiesTab);
