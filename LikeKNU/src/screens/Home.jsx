import { StyleSheet, Text, View } from 'react-native';
import TabViewHeader from '../components/TabViewHeader';

const Home = () => {
  return (
    <View style={styles.message}>
      <Text style={{ fontFamily: 'Pretendard-5' }}>메인 화면</Text>
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
