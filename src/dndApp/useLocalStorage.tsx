import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: string | number) {
  // Get the initial value from localStorage or use the default
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the stored value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, storedValue]);

  // Return the value and a setter function
  const setValue = (value: string | number | Function) => {
    try {
      // Allow value to be a function for functional updates
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Update the state and localStorage
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Error updating ${key} localStorage`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;