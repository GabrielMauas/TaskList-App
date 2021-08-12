import { VStack, Heading, IconButton, Flex, Spacer, useColorMode, useToast } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useState, useEffect } from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Stats from './components/Stats';

function App() {

  const toast = useToast();

  const [ tasks, setTasks ] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || [] 
  );

  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks] );

  function addTask(task){
    setTasks([...tasks, task]);
    toast({
      title: 'Task Added',
      status: 'success',
      duration: '2000',
      isClosable: true
    });
  }

  function deleteTask(id) {
    const newTasks = tasks.filter( task => task.id !== id);
    setTasks(newTasks);
    toast({
      title: 'Task Deleted',
      status: 'error',
      duration: '2000',
      isClosbale: true
    });
  }

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack py={10} spacing={10} >
      <Flex w={["90%", "60%"]} justify="between" >
        <Heading fontWeight="extrabold" fontSize="4xl" bgGradient="linear(to-t, #7928CA, #FF0080)" bgClip="text" >Task List</Heading>
        <Spacer />
        <IconButton  icon={ colorMode === 'light' ? <FaSun /> : <FaMoon /> } borderRadius="10" onClick={ toggleColorMode }/>
      </Flex>
      <Stats tasks={tasks.length} />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </VStack>
  );
}

export default App;
