import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Jobs from './Jobs';
import Search from './Search';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      showIcon={true}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (focused) {
            iconName = 'home';
          } else {
            iconName = 'home-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarLabel: 'Jobs',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
