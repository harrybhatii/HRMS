import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../../constants/colors';



const QualificationTab = () => {

  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <ScrollView>
          <View>
            <View style={{flexDirection:'row', alignItems:'center',gap:170,height:'auto',flex:1}}>
              <View style={styles.dropdown}>
                <TouchableOpacity style={{flexDirection:'row', gap:40, borderWidth:1,color:colors.lightgrey}}>
                <Text style={styles.droptext}>All</Text>
                <Icon name='keyboard-arrow-down' size={24} color={colors.black} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.addbtn}>
                <Icon name='add' size={24} color={colors.white} />
                <Text style={styles.addbtntext}>Add</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Action </Text>
            <Text style={styles.headerText}>s.No. </Text>
            <Text style={styles.headerText}>Qualification </Text>
            <Text style={styles.headerText}>Marks(%) </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(QualificationTab);