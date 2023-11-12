import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ContactsPage, Login, RegisterPage, NotFound } from 'pages';
import Layout from 'components/Layout';
import { refreshThunk } from 'redux/auth/authOperations';

import { AppContainer } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Hello!</h1>} />

          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
};
