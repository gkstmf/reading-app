import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyPageScreen from '../screens/MyPageScreen';
import MylibraryScreen from '../screens/mylibrary/MylibraryScreen';
import GroupMainScreen from '../screens/group/GroupMainScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: 'none'} }}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="내 서재" component={MylibraryScreen} />
      <Tab.Screen name="독서 모임" component={GroupMainScreen} />
      <Tab.Screen name="마이" component={MyPageScreen} />
    </Tab.Navigator>
  );
}