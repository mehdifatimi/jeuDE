import React, { useState } from 'react';
import JeuxDe from './JeuxDe';

export default function App() {
  const [val, setVal] = useState(1);
  const [test , settest ] = useState(false)
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= 1 && newValue <= 6) {
      setVal(newValue);
    }
  };
  const handleClick = ()=>{
    setVal(val)
    settest(true)
  }
  return (
    <div>
      { !test && <><h1>Choisir une valeur entre 1 et 6</h1>

      <input type="number" min="1" max="6" value={val} onChange={handleChange} />
      <button onClick={handleClick}>Set Value</button> </>}

      { test && <JeuxDe valeur={val} test={test} settest={settest} val={val} />}
    </div>
  );
}

