import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const deviceIdKey = 'device_id';
const campusKey = 'campus';

export const getDeviceId = async () => {
  return await AsyncStorage.getItem(deviceIdKey)
};

export const generateAndSaveNewDeviceId = async () => {
  const uuid = uuidv4();
  await AsyncStorage.setItem(deviceIdKey, uuid);
  return uuid;
};

export const getCampus = async () => {
  return await AsyncStorage.getItem(campusKey);
};

export const setCampus = async (campus) => {
  try {
    await AsyncStorage.setItem(campusKey, campus);
  } catch (error) {
    console.error(error);
  }
};
