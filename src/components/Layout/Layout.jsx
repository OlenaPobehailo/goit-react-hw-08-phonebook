import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
