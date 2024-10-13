import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.greetingContainer}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <Path fill="#4D8194" fillRule="evenodd" d="M10 .833a.833.833 0 0 1 .833.834v1.666a.833.833 0 1 1-1.666 0V1.667A.833.833 0 0 1 10 .833ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3.333a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Zm.833 10a.833.833 0 0 0-1.666 0v1.666a.833.833 0 0 0 1.666 0v-1.666ZM19.167 10a.833.833 0 0 1-.834.834h-1.666a.833.833 0 1 1 0-1.667h1.666a.833.833 0 0 1 .834.833Zm-15.834.834a.833.833 0 1 0 0-1.667H1.667a.833.833 0 1 0 0 1.667h1.666Zm13.149-7.316a.833.833 0 0 1 0 1.179l-1.179 1.178a.833.833 0 1 1-1.178-1.178l1.178-1.179a.833.833 0 0 1 1.179 0ZM5.875 15.303a.833.833 0 1 0-1.178-1.178l-1.179 1.178a.833.833 0 1 0 1.179 1.179l1.178-1.178ZM3.518 3.518a.833.833 0 0 1 1.179 0l1.178 1.179a.833.833 0 1 1-1.178 1.178L3.518 4.697a.833.833 0 0 1 0-1.179Zm11.785 10.607a.833.833 0 0 0-1.178 1.178l1.178 1.179a.833.833 0 0 0 1.179-1.178l-1.179-1.179Z" clipRule="evenodd"/>
        </Svg>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.userName}>Alena Sabyan</Text>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.75 3.25 2.08.36.963 11.473a1.8 1.8 0 0 0 1.8 1.653h10.909a1.8 1.8 0 0 0 1.785-1.546l.949-6.558a1.341 1.341 0 0 0-1.135-1.519c-.064-.009-14.937-.014-14.937-.014M14.125 10.795h2.773"/>
          <Path fill="#000" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.154 20.203a.544.544 0 1 1 0 1.087.544.544 0 0 1 0-1.087ZM18.435 20.203a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09Z" clipRule="evenodd"/>
        </Svg>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  greetingContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop:-25
  },
  textContainer: {
    flexDirection: 'column', 
    marginLeft: 8, 
  },
  greetingText: {
    fontSize: 14,
    fontWeight: '600', 
    color: '#4D8194',
    marginTop: 25,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E2B3B', 
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
