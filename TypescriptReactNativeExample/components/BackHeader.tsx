import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

const BackHeader = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.backButton}>{'< 뒤로가기'}</Text>
      </Pressable>
      <Text style={styles.title}>메롱</Text>
      <Text style={styles.rightUp}>asdfasfasef</Text>
    </SafeAreaView>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    paddingBottom: 20,
    width: 80
  },
  backButton: {},
  rightUp: {}
});
