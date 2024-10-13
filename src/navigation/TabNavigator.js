import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path, Circle } from 'react-native-svg'; // Import SVG elements
import HomeScreen from '../screens/HomeScreen';

const DummyScreen = ({ screenName }) => (
  <View style={styles.container}>
    <Text>{screenName} Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <View style={styles.customButton}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

const SearchScreen = () => <DummyScreen screenName="Search" />;
const CrownScreen = () => <DummyScreen screenName="Crown" />;
const NotificationsScreen = () => <DummyScreen screenName="Notifications" />;
const ProfileScreen = () => <DummyScreen screenName="Profile" />;

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconColor = focused ? '#70B9BE' : '#97A2B0';
          if (route.name === 'MainHome') {
            return (
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <Path
                  stroke={iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.157 20.771l-.019-2.21c0-.78.636-1.413 1.424-1.418h2.886c.791 0 1.433.635 1.433 1.419l.02 2.219c0 .662.533 1.204 1.202 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V9.838a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229M9.09 13.89h5.82"
                />
              </Svg>
            );
          } else if (route.name === 'Search') {
            return (
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <Circle cx="11.767" cy="11.766" r="8.989" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <Path stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.018 18.485l3.524 3.515" />
              </Svg>
            );
          } else if (route.name === 'Notifications') {
            return (
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <Path
                  stroke={iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 17.848c5.64 0 8.248-.724 8.5-3.627 0-2.902-1.819-2.716-1.819-6.276C18.681 5.165 16.045 2 12 2S5.319 5.164 5.319 7.945c0 3.56-1.819 3.374-1.819 6.275.253 2.915 2.862 3.628 8.5 3.628Z"
                />
                <Path stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.389 20.857c-1.364 1.515-3.492 1.533-4.87 0" />
              </Svg>
            );
          } else if (route.name === 'Profile') {
            return (
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <Path
                  stroke={iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.848 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.868 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
                />
                <Path
                  stroke={iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.429"
                  d="M12.848 12.006A4.596 4.596 0 1 0 8.252 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
                />
              </Svg>
            );
          }
        },
        tabBarActiveTintColor: '#70B9BE',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainHome" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Crown"
        component={CrownScreen}
        options={{
          tabBarIcon: () => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
              <Path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M6.669 14.676v2.294c0 2.163 0 3.244.672 3.916.672.672 1.753.672 3.916.672h3.058c2.163 0 3.244 0 3.916-.672.672-.672.672-1.753.672-3.916v-2.294M6.669 14.613a4.589 4.589 0 1 1 1.684-9.02M19.057 14.613a4.589 4.589 0 1 0-1.683-9.02" />
              <Path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M8.343 8.177a4.588 4.588 0 1 1 8.886 0" />
              <Path stroke="#fff" strokeWidth="1.5" d="M6.669 18.117h12.234" />
              <Path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M12.756 10.733v2.402M8.507 10.935c-.192.429.16 2.064.576 2.332M17.32 10.935c.192.429-.16 2.064-.576 2.332" />
            </Svg>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    width: 360,
  },
  customButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 17, 
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#70B9BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
