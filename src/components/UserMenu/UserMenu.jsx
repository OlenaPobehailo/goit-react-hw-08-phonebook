import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);
  return (
    <StyledUserMenu>
      <span> {name}</span>
      <span>|</span>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </StyledUserMenu>
  );
};

export default UserMenu;
