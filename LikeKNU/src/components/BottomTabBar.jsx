import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./Home";
import Bus from "./Bus";
import Announcement from "./Announcement";
import Entypo from "react-native-vector-icons/Entypo";
import Calendar from "./Calendar";
import Menu from "./Menu";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabBar(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>;
        },
        tabBarActiveTintColor: '#A68968',
        tabBarInactiveTintColor: '#AFAFAF',
        tabBarLabelStyle: { fontFamily: 'Pretendard-5', fontSize: 14, marginTop: -15 },
        tabBarStyle: { height: 96, borderTopColor: '#E2E2E2', borderTopWidth: 1 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '메인',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size}></Entypo>
          )
        }}
      />
      <Tab.Screen
        name="Announcement"
        component={Announcement}
        options={{
          tabBarLabel: '공지사항',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Bus"
        component={Bus}
        options={{
          tabBarLabel: '버스',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: '식단',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: '학사일정',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-blank" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  headerTitle: {
    fontFamily: 'Pretendard-7',
    fontSize: 32,
    marginBottom: 20
  }
});
