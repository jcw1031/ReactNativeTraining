import AsyncStorage from '@react-native-async-storage/async-storage';
import { Campus } from '../constants/campus';
import { generateAndSaveNewDeviceId, getCampus, getDeviceId, setCampus } from '../utils/DeviceManageUtil';

export const initializeDevice = async () => {
  let deviceId = await getDeviceId();
  if (deviceId === null) {
    deviceId = await generateAndSaveNewDeviceId();
  }
  console.log(deviceId);

  let campus = await getCampus();
  if (campus === null || campus === undefined) {
    campus = Campus.CHEONAN.key;
    await setCampus(campus);
  }
  console.log(campus);

  return campus;
}
