import { useState, useCallback } from 'react';
import Link from 'next/link';

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';

import { TaskProps } from 'components/ToDo/types';

function Tasks (){
  const [ todoList, setTodoList ] = useState<TaskProps[]>( [] );
  
  const addTask = useCallback( (userInput) => {
    if ( userInput ) {
      const newItem: TaskProps  = {
        id: Math.random().toString( 36 ).substring(2, 9),
        task: userInput,
        isComplete: false,
      };
      setTodoList( [ ...todoList, newItem ] );
    }
  }, [todoList] );

  const removeTask = useCallback( (taskId) => {
      setTodoList( [...todoList?.filter( ( todo ) => todo.id !== taskId )] );
  }, [] );

  const handleToggle = useCallback( (taskId) => {
    setTodoList( [ ...todoList?.map( ( todo ) =>
      todo.id !== taskId ? {...todo, isComplete: !todo.isComplete} : todo
    ) ] )
  }, [] );

  return (
    <>
      <h2>The Tasks {todoList?.length}</h2>
      <ToDoForm addTask={ addTask }/>
        { todoList?.map( (todo) => {
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
