import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarActiveTintColor: '#000000',
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarLabelStyle: {
            fontWeight: '500',
            fontSize: 12,
            marginTop: -12
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarActiveTintColor: '#000000',
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hide"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="[user]"
        options={{
          href: {
            pathname: '/[user]',
            params: {
              user: 'jcw',
            },
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
