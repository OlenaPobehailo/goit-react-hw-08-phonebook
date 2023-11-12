import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { StyledNav } from './Navigation.styled';

const Navigation = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  console.log('name', name);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <StyledNav>
      <ul>
        <li>{!isLoggedIn && <NavLink to="/">Home</NavLink>}</li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>

      {isLoggedIn ? (
        <div>
          <span>{name}</span> |{' '}
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        </div>
      ) : (
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Navigation;
