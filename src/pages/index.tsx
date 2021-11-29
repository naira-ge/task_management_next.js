import { BaseSyntheticEvent } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useInput } from 'hooks/useInput';
import { BsDiagram3 } from "react-icons/bs";

import Input from 'components/Input';
import Button from 'components/Button';

import styles from '../styles/Login.module.scss'

const Home: NextPage = () => {
  const { push } = useRouter();
  const { value: email, onChange: onChangeEmail, onBlur: onBlurEmail, error: errorEmail } = useInput( '', true );
  const { value: password, onChange, onBlur, error } = useInput( '', true );


  const handleSubmit = (event: BaseSyntheticEvent) =>{
    event.preventDefault();

    const data = { email: email, password: password };
    console.log( email, password );

    sessionStorage.setItem( "TaskManagement",
      JSON.stringify( { ...data } )
    );
    
     push( '/tasks' );
  }

  return (
    <div className={styles.modal}>
            <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <div className={styles.loginLeft}
                    style={{ backgroundImage: `url(/logo.gif)` }}>
                    <h3 className={styles.loginLogo}>Join us! <BsDiagram3 /></h3>
                    <span className={styles.loginDesc}>
                      Start manage your tasks!
                    </span>
                </div>
                <div className={styles.loginRight}>
                    <form className={styles.loginBox} onSubmit={handleSubmit}>
                          <Input
                            value={ email }
                            type="email"
                            name="email"
                            onChange={ onChangeEmail }
                            onBlur={ onBlurEmail }
                            error={ errorEmail }
                            placeholder="email"
                            className={styles.loginInput}
                          />
                          <Input
                            value={ password }
                            type="password"
                            name="password"
                            onChange={ onChange }
                            onBlur={ onBlur }
                            error={ error }
                            placeholder="password"
                            className={styles.loginInput}
                            />
                          <Button className={styles.loginButton} title="Login"/>
                      </form>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Home
