import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ReactComponent as ExpandIcon } from 'src/assets/icons/expand_more_black_24dp.svg';
import { getCampus } from '../../utils/DeviceManageUtil';

const CampusSelector = () => {
  return <View style={{ flexDirection: 'row' }}>
    <Text style={styles.selectedCampus(getCampus())}></Text>
    <ExpandIcon></ExpandIcon>
  </View>
};

export default CampusSelector;

const styles = StyleSheet.create({
  selectedCampus: selectedCampus => ({
    fontSize: '2.2rem',
    fontFamily: 'Pretendard-7',
    marginRight: '4px',
    color: selectedCampus
  }),
});
