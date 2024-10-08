// src/components/CustomButton.jsx
import { Button } from '@chakra-ui/react';

const CustomButton = ({ label }) => {
  return (
    <Button colorScheme='teal' type='submit' width='full'>
      {label}
    </Button>
  );
};

export default CustomButton;
