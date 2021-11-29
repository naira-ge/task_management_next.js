import { BaseSyntheticEvent, KeyboardEvent } from 'react';
import { useInput } from 'hooks/useInput';
import { BiSearchAlt } from "react-icons/bi";

import Input from 'components/Input';
import Button from 'components/Button';

import styles from './styles.module.scss';

import { ToDoFormProps } from './types';

function ToDoForm ( { addTask, searchTask }: ToDoFormProps ){
  const { value, onChange, onBlur, error } = useInput( '', true );
  
  const handleSubmit = (event: BaseSyntheticEvent) =>{
    event.preventDefault();
    addTask( value );
    onChange(event);
  }

  const handleSearch = (event: BaseSyntheticEvent) =>{
    event.preventDefault();
    searchTask( value );
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>{
    if ( event.key === "Enter" ){
      handleSubmit( event );
    }
  };

  

  return (
        <div className={styles.share}>
          <form className={styles.form}>
            <Input
              value={ value }
              type="text" name="userInput"
              onChange={ onChange }
              onBlur={ onBlur }
              error={ error }
              onKeyDown={ handleKeyDown }
              placeholder="Add your task"
              className={styles.shareInput}
            />
            <Button 
                className={styles.shareButton} 
                onClick={ handleSearch }>
                  <BiSearchAlt />
            </Button>
            <Button 
                className={styles.shareButton} 
                onClick={ handleSubmit }>
                  Add
            </Button>
          </form>
        </div>
  )
}

export default ToDoForm;
