import { AiOutlineDelete } from "react-icons/ai";

import { ToDoProps } from './types';

function ToDo ( { todo, toggleTask, removeTask }: ToDoProps )
{

  return (
    <div className="item-todo">
      <div>
        {todo.task}
      </div>
      <AiOutlineDelete onClick={() => removeTask(todo?.id)}/>
    </div>
  )
}

export default ToDo;
