import { useContext } from 'react';
import { NumberContext } from '../../context/NumberContext';

function ComponentB() {
  const { increment, incrementTwo } = useContext(NumberContext);

  return (
    <div className='buttons_B'>
      <button onClick={increment}>Click B</button>
      <button onClick={incrementTwo}>Click B increase with A</button>
    </div>
  );
}

export default ComponentB;
