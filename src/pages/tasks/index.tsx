import {  useState , useEffect, useCallback } from 'react';
import { useSortableData } from 'hooks/useSortableData';
import { usePagination } from 'hooks/usePagination';
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";

import ToDoForm from 'components/ToDoForm';
import ToDo from 'components/ToDo';
import Pagination from 'components/Pagination';
import { AnyObject } from 'utils/types';

import styles from 'styles/Tasks.module.scss';
import {TaskProps} from 'utils/types';
import Button from 'components/Button';

function Tasks (props){
  const [ todoList, setTodoList ] = useState<TaskProps[]>( props?.tasks );
  const { items, requestSort, sortConfig } = useSortableData(todoList);
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 6,
      count: items?.length,
    } );
  const [ sortDown, setSortDown ] = useState( true );

  const getTasks = async () => {
    try {
      const response = await fetch( '/api/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      } );

      const data = await response.json();
      if ( data ) {
        setTodoList( data.data );
      }
    } catch ( error ) {
      console.trace( error );
    }
  }

  useEffect( () =>
  {
    let unmounted = false;

    if ( !unmounted )
    {
      getTasks();
    }

    return () =>
    {
      unmounted = true;
    };
  }, [] );

  const dataTasks = items?.slice( firstContentIndex, lastContentIndex );
  
  const addTask = useCallback( async (userInput) => {
    if ( userInput ) {
      const newItem: TaskProps  = {
        id: Math.random().toString( 36 ).substring(2, 9),
        task: userInput,
        isComplete: false,
      };
      setTodoList( [ ...todoList, newItem ] );
      
      const response = await fetch( '/api/tasks/new-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( newItem ),
      } );

      const data = await response.json();
      setTodoList([...todoList, data.result]);
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
      todo.task?.toString().toLowerCase().includes( search.toString().toLowerCase() )
    } );
    setTodoList(searchResult);
  }, [] );

  const handleSort = () => {
    setSortDown(prev => !prev);
    requestSort( 'task' );
  }

  console.log( 'todoList', todoList );

  

  return (
    <div className={ styles.container }>
      <div className={styles.wrapper}>
        <ToDoForm addTask={ addTask } searchTask={ searchTask } />
        <span className={styles.pagination}>
          <Pagination
                contentPerPage={6}
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
            <Button className={styles.sort} onClick={ handleSort }>
              {sortDown ?  <BsSortAlphaUp /> : <BsSortAlphaDown />}
            </Button>
        </span>
      </div>
      <div>
        <h3 className={styles.title}>ToDo Tasks <span className={styles.count}>{dataTasks?.length}</span></h3>
        <ul className={ styles.grid }>
            { dataTasks?.map( (todo) => {
              return (
                <ToDo
                key={ todo?.id }
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
  
  return {
    props: {
      tasks: [],
    }
  };
}

export default Tasks;
