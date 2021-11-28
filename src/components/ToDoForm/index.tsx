import { BaseSyntheticEvent, KeyboardEvent } from 'react';
import { useInput } from 'hooks/useInput';

import Input from 'components/Input';
import Button from 'components/Button';

import { ToDoFormProps } from './types';

function ToDoForm ( { addTask }: ToDoFormProps ){
  const { value, onChange, onBlur, error } = useInput( '', true );
  
  const handleSubmit = (event: BaseSyntheticEvent) =>{
    event.preventDefault();
    addTask( value );
    onChange(event);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>{
    if ( event.key === "Enter" ){
      handleSubmit( event );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={ value }
        type="text" name="userInput"
        onChange={ onChange }
        onBlur={ onBlur }
        error={ error }
        onKeyDown={ handleKeyDown }
        placeholder="Add your task"
      />
      <Button title="Save"/>
    </form>
  )
}

export default ToDoForm;
