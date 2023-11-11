import React from 'react';
import { StyledForm } from './RegisterForm.styled';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <input
        placeholder="Enter your name"
        {...register('name', { required: true, minLength: 3 })}
        autoComplete="username"
      />
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
      <button type="submit">Register</button>
    </StyledForm>
  );
};

export default RegisterForm;
