import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from 'react';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import BottomTabBar from "./src/components/BottomTabBar";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Pretendard-1': require('./src/assets/fonts/Pretendard-Thin.otf'),
    'Pretendard-2': require('./src/assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-3': require('./src/assets/fonts/Pretendard-Light.otf'),
    'Pretendard-4': require('./src/assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-5': require('./src/assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-6': require('./src/assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-7': require('./src/assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-8': require('./src/assets/fonts/Pretendard-Black.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer onReady={onLayoutRootView}>
        <BottomTabBar></BottomTabBar>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
