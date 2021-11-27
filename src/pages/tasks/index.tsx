import { useState, useCallback } from 'react';
import Link from 'next/link';

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';

import { TaskProps } from 'components/ToDo/types';

function Tasks (){
  const [ todos, setTodos ] = useState<TaskProps[]>( [] );
  
  const addTask = useCallback( (userInput) => {
    if ( userInput ) {
      const newItem = {
        id: Math.random().toString( 36 ).substring(2, 9),
        task: userInput,
        isComplete: false,
      };
      setTodos( [ ...todos, newItem ] );
    }
  }, [todos] );

  const removeTask = useCallback( () =>
  {
    
  }, [] );

  const handleToggle = useCallback( () =>
  {
    
  }, [] );

  return (
    <>
      <h2>The Tasks {todos?.length}</h2>
      <ToDoForm addTask={ addTask }/>
        { todos?.map( (todo) =>
        {
          return (
            <ToDo
            key={ todo.id }
            todo={ todo }
            toggleTask={ handleToggle } 
            removeTask={ removeTask } />
          )
        })}
    </>
  )
}

export default Tasks;
