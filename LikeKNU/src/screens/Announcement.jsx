import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.message}>
      <Text>Home</Text>
    </View>
  );
};

const Announcement = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 18,
            fontFamily: 'Pretendard-4'
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'black'
          }
        }}>
        <Tab.Screen
          name="Student"
          component={Home}
          options={{
            tabBarLabel: '학생소식'
          }} />
        <Tab.Screen
          name="Dormitory"
          component={Home}
          options={{
            tabBarLabel: '생활관'
          }} />
        <Tab.Screen
          name="Library"
          component={Home}
          options={{
            tabBarLabel: '도서관'
          }} />
        <Tab.Screen
          name="Internship"
          component={Home}
          options={{
            tabBarLabel: '현장실습'
          }} />
      </Tab.Navigator>
    )
  }
;

export default Announcement;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
