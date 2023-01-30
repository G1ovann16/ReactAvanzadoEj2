import React, { useCallback } from "react";

function Example() {
  const names = ["alice", "bob"];

  return <GeneradorNombres names={names} />;

  function GeneradorNombres(props) {
    const { names } = props;

    const [name, setName] = React.useState(names[0]);
    const getName = React.useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setName(names[index]);
    }, [names]);
    const clearName = React.useCallback(() => {
      setName(null);
    }, []);

    return (
      <div className="app">
        <h1>Memo</h1>
        {React.useMemo(() => {
          console.log("renderizado del nombre");
          return (
            <>
              <h2>Nombre generado: {name ? name : "none"}</h2>
            </>
          );
        }, [name])}
        <Button label="Generar nombre" Click={getName} />
        <Button label="Borrar nombre" Click={clearName} />
      </div>
    );
  }
}
function WrappedButton(props) {
  console.log("Renderizado del boton");
  return (
    <button
      onClick={() => {
        props.Click();
      }}
    >
      {props.label}
    </button>
  );
}
const Button = React.memo(WrappedButton);
export default Example;
