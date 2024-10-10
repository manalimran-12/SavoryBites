import React, { useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default function WelcomeScreen() {

  const ring1Padding = useSharedValue(0);  
  const ring2Padding = useSharedValue(0);

  // Animated styles for ring1 and ring2
  const ring1Style = useAnimatedStyle(() => {
    return {
      padding: ring1Padding.value, // padding animation
      transform: [{ scale: withSpring(ring1Padding.value > 0 ? 1.1 : 1) }] // added scale for visual feedback
    };
  });

  const ring2Style = useAnimatedStyle(() => {
    return {
      padding: ring2Padding.value,
      transform: [{ scale: withSpring(ring2Padding.value > 0 ? 1.1 : 1) }] // added scale for visual feedback
    };
  });

  const animateRings = () => {
    ring1Padding.value = withSpring(hp(5));
    ring2Padding.value = withSpring(hp(5.5));
  };

  useEffect(() => {
    animateRings();
  }, []);

  const handleRing1Tap = () => {
    ring1Padding.value = 0; // Reset to initial state
    ring2Padding.value = 0; // Reset to initial state

    setTimeout(() => {
      animateRings(); // Reanimate when tapped
    }, 100);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#70B9BE" />
      
      {/* Apply the tap gesture handler for ring1 */}
      <TapGestureHandler onHandlerStateChange={handleRing1Tap}>
        <Animated.View style={[styles.ring1, ring1Style]}>
          {/* Apply the tap gesture handler for ring2 */}
          <TapGestureHandler onHandlerStateChange={handleRing1Tap}>
            <Animated.View style={[styles.ring2, ring2Style]}>
              <Image source={require('../../assets/Group.png')} style={[styles.image, styles.image1]} />
              <Image source={require('../../assets/2.png')} style={[styles.image, styles.image2]} />
              <Image source={require('../../assets/3.png')} style={[styles.image, styles.image3]} />
              <Image source={require('../../assets/4.png')} style={[styles.image, styles.image4]} />
              <Image source={require('../../assets/5.png')} style={[styles.image, styles.image5]} />
              <Image source={require('../../assets/6.png')} style={[styles.image, styles.image6]} />
            </Animated.View>
          </TapGestureHandler>
        </Animated.View>
      </TapGestureHandler>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>SavoryBites</Text>
        <Text style={styles.text2}>Help your path to health goals with happiness.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#70B9BE',
  },
  ring1: {
    width: wp('75%'),  
    height: wp('75%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: wp('37.5%'),
  },
  ring2: {
    width: wp('50%'),  
    height: wp('50%'),  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: wp('25%'),
    position: 'relative',
  },
  image: {
    width: wp('12%'),  
    height: wp('12%'), 
    position: 'absolute',
  },
  image1: {
    top: 24,
    left: 55,
  },
  image2: {
    top: 75,
    left: 10,
  },
  image3: {
    top: 75,
    right: 10,
  },
  image4: {
    bottom: 24,
    left: 40,
  },
  image5: {
    bottom: 35,
    right: 50,
  },
  image6: {
    top: 30,
    right: 40,
  },
  textContainer: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop:"5%"
  },
  text1: {
    marginVertical: hp('1%'),
    color: '#FFFFFF', 
    fontWeight: 'bold',
    fontSize: wp('10%'),  
    letterSpacing: wp('0.5%'),  
  },
  text2: {
    marginVertical: hp('1%'), 
    color: '#FFFFFF', 
    fontSize: wp('5.5%'), 
    fontWeight: 'bold',
    letterSpacing: wp('0.5%'),
    alignSelf: 'center',
  }
});
