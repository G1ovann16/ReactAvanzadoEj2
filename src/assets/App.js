import React, { useCallback } from "react";

function App() {
  const names = ["alice", "bob"];

  return <GeneradorNombres names={names} />;
}

function GeneradorNombres(props) {
  const { names } = props;

  const [name, setName] = React.useState(name[0]);
  const getName = React.useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  }, [names]);
  const clearName = React.useCallback(() => {
    setName(null);
  }, []);
}

export default App;
