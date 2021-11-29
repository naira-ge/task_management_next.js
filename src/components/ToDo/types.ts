
export type TaskProps = {
  id: string | number;
  task: string | number;
  isComplete: boolean;
}

export type ToDoProps = {
  todo: TaskProps;
  className?: string;
  toggleTask: (id: string | number) => void;
  removeTask: (id: string | number) => void;
}

