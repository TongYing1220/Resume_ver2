import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // 初始化：从本地存储读取，解析失败则用初始值
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (err) {
      console.error('读取本地存储失败：', err);
      return initialValue;
    }
  });

  // 更新本地存储的方法
  const setStoredValue = (newValue) => {
    try {
      // 支持函数式更新（如setState的回调）
      const valueToStore = typeof newValue === 'function' ? newValue(value) : newValue;
      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error('写入本地存储失败：', err);
    }
  };

  return [value, setStoredValue];
};