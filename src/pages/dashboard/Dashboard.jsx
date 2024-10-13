import { Box, Button, Flex, Input } from '@chakra-ui/react';
import Header from '../../components/layouts/header/Header';
import { AddIcon } from '@chakra-ui/icons';
import { CgAddR } from 'react-icons/cg';
import IconEmpty from '../../assets/images/IconEmpty.png';
import todoListAPI from '../../api/todoListAPI';
import { useEffect } from 'react';

function TaskDashboard() {
  useEffect(() => {
    const fetchTodoList = async () => {
      const todoList = await todoListAPI.getAll();
      console.log(todoList);
    };

    fetchTodoList();
  }, []);
  // https://drive.google.com/drive/folders/1NDvwRQWrOJTsfoq8xFKxbvNIompSwLTq
  return (
    <Flex bg='teal.500' minH='100vh' justify='center' align='center'>
      {/* Container for the whole dashboard */}
      <Box
        bg='white'
        borderRadius='md'
        boxShadow='lg'
        px='60px'
        py='40px'
        width='66.67%'
        height='86.67%'
        // maxW='container.md'
        mx='auto'
      >
        {/* Use the Header component and pass the username as a prop */}
        <Header userName='John Holland' />

        {/* Task Section */}
        <Box bg='white' w='full'>
          <Flex justify='space-between' align='center'>
            <Flex align='center' w='full' pr={3}>
              <CgAddR color='#D1D5DB' size='32px' />
              <Input
                placeholder='Add a new task...'
                size='lg'
                border='none'
                outline='none'
                ml={2} // Khoảng cách giữa biểu tượng và input
              />
            </Flex>

            <Button colorScheme='teal' leftIcon={<AddIcon />}>
              Add new
            </Button>
          </Flex>
          <Flex justify='center' align='center' h='60vh'>
            <Box>
              <img src={IconEmpty} alt='Astronaut illustration' />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default TaskDashboard;
