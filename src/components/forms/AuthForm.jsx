// src/components/AuthForm.jsx
import { Box, Heading, VStack } from '@chakra-ui/react';

const AuthForm = ({ title, subtitle, children, onSubmit }) => {
  return (
    <Box w='320px' p='8'>
      <Heading as='h2' size='lg' mb='6' textAlign='center'>
        {title}
      </Heading>
      <Heading as='h5' size='lg' mb='6' textAlign='center'>
        {subtitle}
      </Heading>
      <form onSubmit={onSubmit}>
        <VStack spacing={4}>{children}</VStack>
      </form>
    </Box>
  );
};

export default AuthForm;
