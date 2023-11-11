import React from 'react';
import { StyledForm } from './LoginForm.styled';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    console.log(data);
  };
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
