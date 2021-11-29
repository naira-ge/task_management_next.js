import { useState, useCallback } from 'react';
import { useSortableData } from 'hooks/useSortableData';
import { usePagination } from 'hooks/usePagination';

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';
import Pagination from 'components/Pagination';
import { AnyObject } from 'utils/types';

import styles from 'styles/Tasks.module.scss';
import { TaskProps } from 'components/ToDo/types';

function Tasks ({ tasks }:TaskProps[]){
  const [ todoList, setTodoList ] = useState<TaskProps[]>( tasks );
  const { items, requestSort, sortConfig } = useSortableData(todoList);
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 9,
      count: items?.length,
    });

  const dataTasks = items?.slice(firstContentIndex, lastContentIndex);
  
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

  const removeTask = useCallback( ( taskId ) => {
    const newTodos = todoList?.filter( ( todo ) => todo.id !== taskId );
      setTodoList(newTodos);
  }, [todoList] );

  const handleToggle = useCallback( (taskId) => {
    setTodoList( [ ...todoList?.map( ( todo ) => (
      todo.id === taskId ? { ...todo, isComplete: !todo.isComplete } : todo
    )) ] )
  }, [todoList] );

  const searchTask = useCallback( ( search: string ) => {
    const searchResult = todoList?.filter( todo => {
      todo.task?.toLowerCase().includes( search.toLowerCase() )
    } );
    setTodoList(searchResult);
  }, [] );

  console.log( 'todoList', todoList );

  

  return (
    <div className={ styles.container }>
      <div className={styles.wrapper}>
      <ToDoForm addTask={ addTask } searchTask={ searchTask } />
      <Pagination
            contentPerPage={9}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
        />
      </div>
      <div>
        <h3 className={styles.title}>ToDo Tasks <span className={styles.count}>{dataTasks?.length}</span></h3>
        <ul className={ styles.grid }>
            { dataTasks?.map( (todo) => {
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
      </div>
    </div>
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
