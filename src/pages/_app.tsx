import { createContext, useCallback, useState } from 'react';
import type { AppContext, AppProps } from 'next/app';
import Layout from 'components/Layout';

import type { AnyObject } from 'utils/types';

import '../styles/globals.scss';

export const AuthContext = createContext<AnyObject>( {} );

type UserInfo = AnyObject;

export default function App( { Component, pageProps, userInfo }: AppProps & UserInfo ) {
  const [ auth, setAuth ] = useState( userInfo );

  const setCredentials = useCallback(credentials => {
    setAuth({ ...credentials });
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        credentials: auth,
        setCredentials,
      }}
    >
      <Layout isAuth={auth? true : false}>
          <Component { ...pageProps } />
      </Layout>
    </AuthContext.Provider>
  )
}

App.getInitialProps = async ( { ctx }: AppContext ) =>{
  try {
    //   const response = await fetch( 'http://localhost:3000/api/user/info', {
    //   method: 'GET',
    // } );

    // const data = await response.json();

     return {
      userInfo: [],
    };
    
  } catch ( err ) {
    return {
      userInfo: null,
    };
  }
};
