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

  const sort = () => {};

  const invert = () => {};

  return { value, setValue, push, remove, isEmpty, clear, sort, invert };
};
export default useList;
