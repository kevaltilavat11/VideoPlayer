import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save data to AsyncStorage
 * @param {string} key
 * @param {any} value
 */
export const storeData = async (key:any, value:any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Error saving ${key}:`, e);
  }
};

/**
 * Get data from AsyncStorage
 * @param {string} key
 * @returns {Promise<any|null>}
 */
export const getData = async (key:any) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error reading ${key}:`, e);
    return null;
  }
};

/**
 * Remove a specific key
 * @param {string} key
 */
export const removeData = async (key:any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing ${key}:`, e);
  }
};

/**
 * Clear all AsyncStorage data
 */
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('Error clearing AsyncStorage:', e);
  }
};
