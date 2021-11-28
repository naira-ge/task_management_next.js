import { useState, useCallback } from 'react';

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';
import { AnyObject } from 'utils/types';

import { TaskProps } from 'components/ToDo/types';

function Tasks ({tasks}:TaskProps[]){
  const [ todoList, setTodoList ] = useState<TaskProps[]>( tasks );
  
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
    setTodoList( [ ...todoList?.map( ( todo ) => (
      todo.id === taskId ? { ...todo, isComplete: !todo.isComplete } : todo
    )) ] )
  }, [todoList] );

  console.log( 'todoList', todoList );

  return (
    <>
      <h2>The Tasks {todoList?.length}</h2>
      <ToDoForm addTask={ addTask } />
      <ul>
        { todoList?.map( (todo) => {
          return (
            <ToDo
            key={ todo.id }
            todo={ todo }
            toggleTask={ handleToggle } 
            removeTask={ removeTask } />
          )
        })}
      </ul>
    </>
  )
}

export async function getServerSideProps (context: AnyObject) {
  
  return {
    props: {
      tasks: [],
    }
  };
}

export default Tasks;
