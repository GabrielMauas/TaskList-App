import { Input, IconButton, FormControl, useToast } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import{ nanoid } from 'nanoid';
import { useState } from 'react';

function AddTask({ addTask }) {

    const toast = useToast();

    const [content, setContent] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if(!content) {
            toast({
                title: 'Task is empty',
                status:'error',
                duration: '2000',
                isClosable: 'true'
            });
            return;
        }

        const task = {
            id: nanoid(),
            body: content
        };

        addTask(task);

        setContent('');
    }

    return(
        <FormControl as="form" autoComplete="off" w={["90%", "60%"]} onSubmit={handleSubmit} display="flex" spacing={2}> 
            <Input placeholder="Add Task" variant="filled" mr="2" value={ content } onChange={ e => setContent(e.target.value) } />
            <IconButton type="submit" icon={ <FaPlus /> } bgGradient="linear(to-t, #7928CA, #FF0080)" color="white" />
        </FormControl>      
    )
}

export default AddTask;