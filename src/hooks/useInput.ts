import { useState, BaseSyntheticEvent } from 'react';


export const useInput = ( initial: string | number, required: boolean ) => {
  const [ value, setValue ] = useState<string | number>( initial );
  const [ error, setError ] = useState<string>( '' );

  return {
    value,
    error,
    onChange: ( event: BaseSyntheticEvent ) => setValue( event.target.value || '' ),
    onBlur: ( event: BaseSyntheticEvent ) => {
      if ( !event.target.value && required ) setError( 'Required field' );
      else setError( '' );
    }
  }
};


