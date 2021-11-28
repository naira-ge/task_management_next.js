import Head from 'next/head';

import type { LayoutProps } from './types';

import styles from './styles.module.scss';

function Layout({
  children,
  className,
  toggle,
  title,
  isAuth,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Task management'} </title>
      </Head>
      <div className={className} >
        <header>
          <nav> { isAuth ? "Search" : "Navbar"}</nav>
        </header>
        <main>
          {children}
        </main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Layout;
