import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsUser } from 'redux/auth/authSelectors';
import { StyledForm } from './LoginForm.styled';
import { useEffect } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectIsUser);
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      toast.success(`Welcome, ${name}`);
    }
  }, [isLoggedIn, name]);

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
