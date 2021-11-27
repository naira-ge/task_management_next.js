import { ToDoProps } from './types';

function ToDo ({todo, toggleTask, removeTask }: ToDoProps){
  return (
    <div className="item-todo">
      <div>
        {todo.task}
      </div>
    </div>
  )
}

export default ToDo;
