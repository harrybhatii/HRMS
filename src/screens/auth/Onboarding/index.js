import React, { useEffect } from 'react';
import { Image, Text, View, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../constants/colors';
import styles from './styles';

const Onboarding = () => {
  const fadeAnim = new Animated.Value(0);
  const slideUpAnim = new Animated.Value(100);
  const textOpacityAnim = new Animated.Value(0);
  const textScaleAnim = new Animated.Value(0);

  const navigation = useNavigation();

  useEffect(() => {
   
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    
    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    
    Animated.sequence([
      
      Animated.timing(textOpacityAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),

      
      Animated.timing(textScaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(2), 
        useNativeDriver: true,
      }),
    ]).start();

    const navigateToLogin = setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);

    return () => clearTimeout(navigateToLogin);
  }, [fadeAnim, slideUpAnim, textOpacityAnim, textScaleAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View>
        <Image
          style={{ backgroundColor: colors.white }}
          source={require('../../../assets/nead-logo.png')}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
        <Animated.Text
          style={[
            styles.animatedText,
            {
              opacity: textOpacityAnim,
              color: colors.skyblue,
              fontSize: 50,
              transform: [{ scale: textScaleAnim }],
            },
          ]}
        >
          HRMS App
        </Animated.Text>
        <View style={styles.footer} />
      </View>

      <Animated.View style={[styles.content, { transform: [{ translateY: slideUpAnim }] }]}>
        <Text style={styles.title}> Welcome to keyman HR! </Text>
        <Text style={styles.subtitle}>
          This is simple dummy text for testing
        </Text>
      </Animated.View>
      <Text style={styles.text}>Powered by Nead IT Solutions </Text>
    </Animated.View>
  );
};

export default React.memo(Onboarding);
