import { VStack, IconButton, Flex, StackDivider, Text, Badge, useColorModeValue } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function AddTask({ tasks, deleteTask }) {

    const border = useColorModeValue("gray.300", "gray.700");

    if( !tasks.length ) {
        return(
            <Badge fontSize="l" fontWeight="semibold" p="2" w={["90%", "60%"]} textAlign="center" bgColor={border} opacity="0.4">
                No tasks yet...
            </Badge>
        )
   
    }
    return(
        <VStack w={["90%", "60%"]} divider={ <StackDivider /> } spacing={4} align="stretch" borderWidth="2px" borderColor={border} borderRadius="10" p="5" >
            
            { tasks.map(task => (
                <Flex key={ task.id } justify="space-between" align="center">
                    <Text fontSize="17">{task.body}</Text>
                    <IconButton icon={ <FaTrash /> } borderRadius="10" onClick={ () => deleteTask(task.id) } />
                </Flex>
            )) }
            
        </VStack>
    )
    


}

export default AddTask;