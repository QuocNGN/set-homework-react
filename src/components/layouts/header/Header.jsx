import { Button, Flex, Text } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

const Header = ({ userName }) => {
  return (
    <Flex justify='space-between' align='center' mb={6} px="24px">
      {/* Greeting Section */}
      <Text fontSize='xl' fontWeight='bold'>
        Welcome, {userName}
      </Text>

      {/* Actions Section */}
      <Button background="black" variant='solid' borderRadius='50%' p={1}>
        <IoLogOutOutline color='white' size='22px' />
      </Button>
    </Flex>
  );
};

export default Header;
