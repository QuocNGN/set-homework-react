import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  Box,
  VStack,
  Heading,
} from '@chakra-ui/react';
import '../pagingAuth.scss';

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');  // Điều hướng đến trang đăng nhập
  };

  return (
    <div className='container'>
      <div className='todo-app left'>
        <p className='todo-app__title'>Todo App</p>
        <p className='todo-app__subtitle'>Manage your work every day</p>
      </div>
      <div className='auth-form right'>
        <Box w='320px' mx='auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align='flex-start' w='full'>
              <VStack align="flex-start" pb="24px">
                <Heading>Hello!</Heading>
                <Text>Sign Up to Get Started</Text>
              </VStack>

              <FormControl isInvalid={errors.hoten}>
                <FormLabel fontSize="14px" htmlFor='hoten'>Full name</FormLabel>
                <Input
                  id='hoten'
                  placeholder='Enter your name'
                  {...register('hoten', {
                    required: 'This is required',
                    minLength: {
                      value: 4,
                      message: 'This field can not be empty',
                    },
                  })}
                />
                <FormErrorMessage fontSize="12px">
                  {errors.hoten && errors.hoten.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.email}>
                <FormLabel fontSize="14px" htmlFor='email'>Email Address</FormLabel>
                <Input
                  id='email'
                  placeholder='Enter your email'
                  {...register('email', {
                    required: 'This is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message:
                        'Please enter a valid email address in format: name@example.com',
                    },
                  })}
                />
                <FormErrorMessage fontSize="12px">
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <FormLabel fontSize="14px" htmlFor='password'>Password</FormLabel>
                <Input
                  id='password'
                  placeholder='Enter at least 6 characters'
                  type='password'
                  {...register('password', {
                    required: 'This is required',
                    minLength: {
                      value: 6,
                      message:
                        'Please enter a valid password. The password is required at least 6 characters',
                    },
                  })}
                />
                <FormErrorMessage fontSize="12px">
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.passwordConfirm}>
                <FormLabel fontSize="14px" htmlFor='passwordConfirm'>
                  Confirm Password
                </FormLabel>
                <Input
                  id='passwordConfirm'
                  type='password'
                  placeholder='Confirm password'
                  {...register('passwordConfirm', {
                    required: 'This is required',
                    validate: (value) =>
                      value === getValues('password') ||
                      'Password does not match',
                  })}
                />
                <FormErrorMessage fontSize="12px">
                  {errors.passwordConfirm && errors.passwordConfirm.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt="24px"
                colorScheme='teal'
                isLoading={isSubmitting}
                type='submit'
                w='100%'
              >
                Register
              </Button>
              <HStack w='full'>
                <Text>Already have an account?</Text>
                <Button variant='link' colorScheme='blue' onClick={handleLoginClick}>
                  Login here
                </Button>
              </HStack>
            </VStack>
          </form>
        </Box>
      </div>
    </div>
  );
}

{
  /* <HStack w='full'>
  <Checkbox>Remember me?</Checkbox>
  <Button variant='link' colorScheme='blue'>
    Forgot Password
  </Button>
</HStack> */
}
export default Register;
