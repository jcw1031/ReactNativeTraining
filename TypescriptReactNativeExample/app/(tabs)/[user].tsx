import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const User = () => {
  let { user } = useLocalSearchParams();

  return (
    <View>
      <Text>User {user}</Text>
    </View>
  );
};

export default User;
