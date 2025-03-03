import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      //get value from local storage using key

      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        typeof storeValue === "function"
          ? setStoreValue(storeValue)
          : storeValue;

      window, localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storeValue]);

  return [storeValue, setStoreValue];
}

export default useLocalStorage;
