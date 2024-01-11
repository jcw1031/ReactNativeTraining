import { StyleSheet, Text, View } from 'react-native';

const Bus = () => {
  return (
    <View style={styles.message}>
      <Text>버스</Text>
    </View>
  )
};

export default Bus;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato'
  }
});

