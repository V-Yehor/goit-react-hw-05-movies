import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
