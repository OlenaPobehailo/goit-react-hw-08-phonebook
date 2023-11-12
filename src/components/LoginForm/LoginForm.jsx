import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledForm, Wrapper } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { register, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <input
          placeholder="Enter your email"
          {...register('email', { required: true, minLength: 6 })}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Enter your password"
          {...register('password', { required: true, minLength: 6 })}
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </StyledForm>
  );
};

export default LoginForm;
