import { useContext } from 'react';
import ComponentB from '../componentB/ComponentB';
import { NumberContext } from '../../context/NumberContext';
import './A.scss';

function ComponentA() {
  const { number, increment } = useContext(NumberContext);

  return (
    <div className='wrapper_A'>
      <p>Counter: {number}</p>
      <div className='buttons'>
        <button onClick={increment}>Click A</button>

        <ComponentB increment={increment} />
      </div>
    </div>
  );
}

export default ComponentA;
