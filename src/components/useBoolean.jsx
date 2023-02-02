import React, { useRef, useState } from "react";

const UseBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue(!value),
    on: () => setValue(true),
    of: () => setValue(false),
  });
  return [value, updateValue.current];

const ExampleBoolean = ({}) => {
  const [list, setList] = useState([]);

  const [loading, setLoading] = useBoolean(false);

  const [error, setError] = useBoolean(false);

  useEffect(() => {
    setLoading.on;
    fetch("https://regres.in/users")
      .then((res) => res.json())
      .then(setList)
      .catch((error) => {
        console.log(`Ha ocurrido un error ${error}`);
        setError.on();
      })
      .finally(() => setLoading.off);
  }, [list, setError, setLoading]);

  return (
    <div>
      <p>{loading ? "LOading..." : null}</p>
      <p>{error ? "ha ocurrido un error..." : null}</p>
    </div>
  );
};
};

export default UseBoolean;
