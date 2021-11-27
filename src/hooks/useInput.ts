import { useState, BaseSyntheticEvent } from 'react';


const useInput = ( initial, required ) => {
  const [ value, setValue ] = useState<String | Number>( initial );
  const [ error, setError ] = useState<String>( '' );

  return {
    value,
    error,
    onChange: (e: BaseSyntheticEvent) => setValue( e.target.value ),
    onBlur: (e: BaseSyntheticEvent) => {
      if ( !e.target.value && required ) setError( 'Required field' );
      else setError( '' );
    }
  }
}