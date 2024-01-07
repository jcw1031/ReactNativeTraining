import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;