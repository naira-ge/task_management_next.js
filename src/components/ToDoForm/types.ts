import { BaseSyntheticEvent, ReactNode } from 'react';

export type ToDoFormProps = {
  addTask: ( userInput: string | number ) => void;
}