import { Link, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';

const Tab = () => {
  let navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Tab [Home|Settings]</Text>
      <Link href="/(pages)/stack">Stack page</Link>
    </View>
  );
};

export default Tab;
