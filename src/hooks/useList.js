import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  const clear = () => {
    setValue([]);
  };

  const sort = () => {
    
    console.log(value)
    setValue((oldValue)=> oldValue.sort())
    console.log(value)
  };

  const invert = () => {
    console.log(value)
    setValue((oldValue)=> oldValue.reverse())
    console.log(value)
  };

  return { value, setValue, push, remove, isEmpty, clear, sort, invert };
};
export default useList;
