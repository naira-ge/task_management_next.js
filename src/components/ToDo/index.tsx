import Link  from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";

import styles from "./styles.module.scss";

import { ToDoProps } from './types';

function ToDo ( { todo, toggleTask, removeTask, className }: ToDoProps ){

  return (
    <li 
      className={ className }
    >
      <div className={styles.wrapper}>
        <div className={ styles.delete} >
          <MdOutlineDoneOutline onClick={() => toggleTask(todo.id)}/>
          <AiOutlineDelete onClick={ () => removeTask( todo.id ) } />
        </div>
        <p className={ todo.isComplete ? styles.strike : styles.text }>
          { todo.task }
        </p>
        <Link href={ `/tasks/${ todo.id }` } passHref>
          <p className={ styles.more}>
            &rarr;
          </p>
        </Link>
      </div>
    </li>
  )
}

export default ToDo;
