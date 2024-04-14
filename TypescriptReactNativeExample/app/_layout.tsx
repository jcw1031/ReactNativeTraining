import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)" options={{ headerShown: true }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AppLayout;
