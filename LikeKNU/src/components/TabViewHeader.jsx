import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabViewHeader = () => {
  const { bottom: bottomHeight, top: statusBarHeight } = useSafeAreaInsets();

  return (
    <View style={styles.container(statusBarHeight)}>
      <Text style={styles.title}>식단</Text>
    </View>
  );
};

export default TabViewHeader;

const styles = StyleSheet.create({
  container: statusBarHeight => ({
    paddingTop: statusBarHeight + 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    zIndex: 0
  }),
  title: {
    fontFamily: 'Pretendard-6',
    fontSize: 28
  }
});
