import Link  from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./styles.module.scss";

import { ToDoProps } from './types';

function ToDo ( { todo, toggleTask, removeTask, className }: ToDoProps ){

  return (
    <li 
      className={ className }
      onClick={() => toggleTask(todo.id)}
    >
      <div className={ todo.isComplete ? "item-text strike" : "item-text" }>
        { todo.task }
        <Link href={ `/tasks/${ todo.id}` }>Show more &rarr;.</Link>
      </div>
      <div className="item-delete" onClick={ () => removeTask( todo.id ) }>
        <AiOutlineDelete />
      </div>
    </li>
  )
}

export default ToDo;
