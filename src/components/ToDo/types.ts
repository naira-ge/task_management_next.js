import {TaskProps} from 'utils/types';


export type ToDoProps = {
  todo: TaskProps;
  className?: string;
  toggleTask: (id: string | number) => void;
  removeTask: (id: string | number) => void;
}

