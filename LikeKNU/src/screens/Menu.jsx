import { StyleSheet, Text, View } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.message}>
      <Text>식단 메뉴</Text>
    </View>
  )
};

export default Menu;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
