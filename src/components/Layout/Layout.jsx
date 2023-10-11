import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink, Counter } from '../Layout/Layout.styled';
import { Loader } from '../Loader/Loader';
import { FavoriteCount } from '../../components/FavoriteCount/FavoriteCount';

function Layout() {
  return (
    <>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">
          Favorites
          <Counter>
            <FavoriteCount />
          </Counter>
        </StyledNavLink>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
