import { useState } from 'react';
import './A.scss';
import ComponentB from '../componentB/ComponentB';

function ComponentA() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((number) => number + 1);
  };

  const incrementTwo = () => {
    setNumber((prevNumber) => prevNumber + 2);
  };

  return (
    <div className='wrapper_A'>
      <p>Counter: {number}</p>
      <div className='buttons'>
        <button onClick={increment}>Click A</button>

        <ComponentB increment={increment} incrementTwo={incrementTwo} />
      </div>
    </div>
  );
}

export default ComponentA;
