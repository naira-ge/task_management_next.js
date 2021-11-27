import { useState, BaseSyntheticEvent } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

import { ToDoFormProps } from './types';

function ToDoForm ({addTask} : ToDoFormProps)
{
  const [ userInput, setUserInput ] = useState( '' );

  const handleChange = (e: BaseSyntheticEvent) => {
    setUserInput( e.target.value );
  }

  const handleSubmit = (e: BaseSyntheticEvent) =>{
    e.preventDefault();
    addTask( userInput );
    setUserInput('');
  }

  const handleKeyDown = (e) =>{
    if ( e.key === "Enter" ){
      handleSubmit( e );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={ userInput }
        type="text" name="userInput"
        onChange={ handleChange }
        onBlur={ handleChange }
        onKeyDown={ handleKeyDown }
        placeholder="Add your task" />
      <Button title="Save"/>
    </form>
  )
}

export default ToDoForm;
