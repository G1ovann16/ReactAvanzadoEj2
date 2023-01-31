import React, { useState } from "react";

function UseCounter ()  {
const initialValue= 20

  const [value, setValue] = useState(initialValue);
  const incValue = React.useCallback(() => {
    if (value <=99){
        setValue(value+1);
    }
    else{
        alert('Ha alcanzado el máximo a incrementar')
    }
  }, [value]);
  const decValue = React.useCallback(() => {
    if (value >=-99)
    {setValue(value-1);}
    else{
        alert('Ha alcanzado el máximo a decrementar')
    }
  }, [value]);
  const incMoreValue = React.useCallback(() => {
    if (value <=94){
        setValue(value+5);
    }
    else{
        alert('Ha alcanzado el máximo a incrementar')
    }
  }, [value]);
  const decMoreValue = React.useCallback(() => {
    if (value >=-94)
    {setValue(value-5);}
    else{
        alert('Ha alcanzado el máximo a decrementar')
    }
  }, [value]);
  const resetValue = React.useCallback(() => {
    setValue(value === 0);
  }, [value]);
  return (
    <div className="app" >
        <div style={{display: 'flex'}}>

      <h3>Valor máximo: 100</h3>
      <h1>Contador</h1>
      <h3>Valor mínimo: -100</h3>
        </div>
      {React.useMemo(()=>{
        return(
            <>
            <h2>
                numero: {value ? value : 0} 
            </h2>
            </>
        )
      }, [value])}

      <Button label="Aumentar valor x5" Click={incMoreValue} />
      <Button label="Aumentar valor" Click={incValue} />
      <Button label="decrementar valor" Click={decValue} />
      <Button label="decrementar valor x5" Click={decMoreValue} />
      <Button label="resetear valor" Click={resetValue} />
    </div>
  );
};
  function WrappedButton(props) {
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
export default UseCounter;
