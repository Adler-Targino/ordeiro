import AsyncStorage
  from '@react-native-async-storage/async-storage';
import { Timer } from './timer';

const setTimer = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) { }
}

const removeTimer = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) { }
}

const getTimersJSON = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  } catch (e) { return []; }
}

const getTimers = async () => {
  try {
    let timers: Timer[] = [];
    let objJSON = await getTimersJSON();
    if (objJSON != null && objJSON.length > 0)
      objJSON.forEach(element => {
        if (element[1] !== null) {
          let timer: Timer = JSON.parse(element[1]);
          timers.push(timer);
        }
      });
    return timers;
  } catch (e) { return []; }
}

class TimerManager {
  public async remove(key: number) {
    removeTimer(key.toString());
  }
  public async set(timer: Timer) {
    setTimer(timer.id.toString(), timer);
  }
  public async getAll(): Promise<Array<Timer>> {
    let items: Array<Timer> = await getTimers();
    return items;
  }
}

export default TimerManager;

