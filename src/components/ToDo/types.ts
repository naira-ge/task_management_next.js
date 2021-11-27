
export type TaskProps = {
  id: string | number;
  task: string | number;
  isComplete: boolean;
}

export type ToDoProps = {
  todo: TaskProps;
  toggleTask: (id: string | number) => void;
  removeTask: (id: string | number) => void;
}

