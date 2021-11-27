
export type TaskProps = {
  id: string | number;
  task: string | number;
  isComplete: boolean;
}

export type ToDoProps = {
  todo: TaskProps;
  toggleTask: () => void;
  removeTask: () => void;
}

