import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledNav } from './Navigation.styled';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <ul>
        <li>{!isLoggedIn && <NavLink to="/">Home</NavLink>}</li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </StyledNav>
  );
};

export default Navigation;
