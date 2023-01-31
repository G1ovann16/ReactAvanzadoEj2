import React, { useRef } from "react";

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue(!value),
    on: () => setValue(true),
    of: () => setValue(false),
  });
  return [value, updateValue.current];
};
const ExampleBoolean = ({}) => {
  const [lista, setLista] = useState([]);

  const [loading, setLoading] = useBoolean(false);

  const [error, setError] = useBoolean(false);

  useEffect(() => {
    setLoading.on;
    fetch("https://regres.in/users")
      .then((res) => res.json())
      .then(setLista)
      .catch((error) => {
        console.log(`Ha ocurrido un error ${error}`);
        setError.on();
      })
      .finally(() => setLoading.off);
  }, [lista, setError, setLoading]);

  return (
    <div>
      <p>{loading ? "LOading..." : null}</p>
      <p>{error ? "ha ocurrido un error..." : null}</p>
    </div>
  );
};

export default UseBoolean;
