import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navigation';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
