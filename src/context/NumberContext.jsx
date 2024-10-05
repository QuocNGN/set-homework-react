import { createContext, useState } from 'react';

// Tạo context
export const NumberContext = createContext();

// Provider để cung cấp trạng thái và hàm
export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const incrementTwo = () => {
    setNumber((prevNumber) => prevNumber + 2);
  };

  return (
    <NumberContext.Provider value={{ number, increment, incrementTwo }}>
      {children}
    </NumberContext.Provider>
  );
};
