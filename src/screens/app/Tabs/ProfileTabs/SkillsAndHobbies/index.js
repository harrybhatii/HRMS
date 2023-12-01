import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Achievement from '../SkillsandHobbiesData/Achievement';
import Hobbies from '../SkillsandHobbiesData/Hobbies';
import Skills from '../SkillsandHobbiesData/Skills';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const SkillsAndHobbiesTab = () =>{
const navigation = useNavigation();
  const[activeButton, setActiveButton]=useState('Skills')


  const renderContent = () => {
    if (activeButton === "Skills") {
      return <Skills/>
    }else if(activeButton === "Hobbies"){
      return <Hobbies/>
    }else if(activeButton === "Achievement")
    return <Achievement/> 
  }

    return (
      <View style={styles.header}>
        <ScrollView>
        <View style={{display:"flex", flexDirection:"row"}}>
        <TouchableOpacity style={{ marginLeft:10}} onPress={() => setActiveButton('Skills')}>
        <Text
         style={[ styles.text ,{color : activeButton === 'Skills' ? '#00ACEE' : '#929094',
         backgroundColor : activeButton === 'Skills' ? '#D3F3FF' : '#ddd' },]}>Skills</Text>  
        </TouchableOpacity>

        <TouchableOpacity  style={{marginLeft:10}}  onPress={() => setActiveButton('Hobbies')}>
          <Text 
          style={[ styles.text,{color : activeButton === 'Hobbies' ? '#00ACEE' : '#929094' ,  
          backgroundColor : activeButton === 'Hobbies' ? '#D3F3FF' : '#ddd' },]}>Hobbies</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={{marginLeft:10}}  onPress={()=> setActiveButton('Achievement')}>
          <Text style={[styles.text,{color: activeButton === 'Achievement' ? '#00ACEE' : '#929094' ,
            backgroundColor : activeButton === 'Achievement' ? '#D3F3FF' : '#ddd' }]} >Achievement</Text>
        </TouchableOpacity>
        </View>
        <View>
        {renderContent()}
        </View>
        </ScrollView>
      </View>
    );
  };


export default React.memo(SkillsAndHobbiesTab);
