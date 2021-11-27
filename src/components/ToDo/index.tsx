import { AiOutlineDelete } from "react-icons/ai";

import { ToDoProps } from './types';

function ToDo ( { todo, toggleTask, removeTask }: ToDoProps )
{

  return (
    <div
      className={ todo.isComplete ? "item-text strike" : "item-text" }
      onClick={() => toggleTask(todo.id)}
    >
      <div>
        {todo.task}
      </div>
      <div className="item-delete" onClick={ () => removeTask( todo.id ) }>
        <AiOutlineDelete />
      </div>
    </div>
  )
}

export default ToDo;
