import { Stack } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

const StackPage = () => {
  return (
    <SafeAreaView>
      <Stack.Screen />
      <Text>테스트 페이지</Text>
    </SafeAreaView>
  );
};

export default StackPage;
