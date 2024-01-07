import { StyleSheet, Text, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.message}>
      <Text>학사일정</Text>
    </View>
  )
};

export default Calendar;

const styles = StyleSheet.create({
  message: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
