import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
