import { StyleSheet, Text, View } from "react-native";

const Announcement = () => {
  return (
    <View style={styles.message}>
      <Text>공지사항</Text>
    </View>
  )
};

export default Announcement;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
