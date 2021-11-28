import { useRouter } from 'next/router';
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./styles.module.scss";

import { ToDoProps } from './types';


function ToDo ( { todo, toggleTask, removeTask }: ToDoProps ){
  const { push } = useRouter();

  const showDetails = (taskId: number | string) => {
    push( `/tasks/${ taskId }` );
  }

  return (
    <li 
      className={ todo.isComplete ? "item-text strike" : "item-text" }
      onClick={() => toggleTask(todo.id)}
    >
      <div>
        { todo.task }
        <span onClick={() =>showDetails(todo.id)}>Show more...</span>
      </div>
      <div className="item-delete" onClick={ () => removeTask( todo.id ) }>
        <AiOutlineDelete />
      </div>
    </li>
  )
}

export default ToDo;
