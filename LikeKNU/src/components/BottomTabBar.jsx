import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Announcement from '../screens/Announcement';
import Bus from '../screens/Bus';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const { bottom: bottomHeight, top: statusBarHeight } = useSafeAreaInsets();
  // const statusBarHeight = getStatusBarHeight();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#A68968',
        tabBarInactiveTintColor: '#AFAFAF',
        tabBarLabelStyle: styles.label,
        tabBarIconStyle: { flex: 3 },
        tabBarStyle: {
          height: 70,
          borderTopColor: '#E2E2E2',
          borderTopWidth: 1,
          bottom: bottomHeight,
          paddingBottom: 0,
          paddingHorizontal: 10,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 28,
          fontFamily: 'Pretendard-6',
        },
        headerStyle: {
          height: 100,
          shadowOpacity: 0
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <View style={styles.homeHeader(statusBarHeight)}>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>;
          },
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
          ),
          headerTitle: '공지사항'
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
          tabBarBadge: 95,
          tabBarBadgeStyle: { top: 10, textAlign: 'center', padding: 2 }
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  homeHeader: statusBarHeight => ({
    height: 80,
    top: statusBarHeight,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    padding: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1
  }),
  headerTitle: {
    fontFamily: 'Pretendard-7',
    fontSize: 32,
  },
  label: {
    flex: 1,
    fontFamily: 'Pretendard-5',
    fontSize: 12,
    marginBottom: -10,
    marginTop: -10
  }
});
