import { useState, useCallback } from 'react';

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';
import { AnyObject } from 'utils/types';

import styles from 'styles/Tasks.module.scss';
import { TaskProps } from 'components/ToDo/types';

function Tasks ({tasks}:TaskProps[]){
  const [ todoList, setTodoList ] = useState<TaskProps[]>( tasks );
  
  const addTask = useCallback( async (userInput) => {
    if ( userInput ) {
      const newItem: TaskProps  = {
        id: Math.random().toString( 36 ).substring(2, 9),
        task: userInput,
        isComplete: false,
      };
      setTodoList([...todoList, newItem]);
      const response = await fetch( '/api/new-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( newItem ),
      } );

      const data = await response.json();
      setTodoList([...todoList, newItem]);
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
      <div>
        <h3 className={styles.title}>The Tasks {todoList?.length}</h3>
        <ToDoForm addTask={ addTask } />
      </div>
      <ul className={styles.grid}>
        { todoList?.map( (todo) => {
          return (
            <ToDo
            key={ todo.id }
            todo={ todo }
            toggleTask={ handleToggle } 
            removeTask={ removeTask } 
            className={styles.card} />
          )
        })}
      </ul>
    </>
  )
}

export async function getServerSideProps ( context: AnyObject ){
  
  // const response = await fetch( 'http://localhost:3000/api/tasks', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     } );

  //     const data = await response.json();

  return {
    props: {
      tasks: [],
    }
  };
}

export default Tasks;
