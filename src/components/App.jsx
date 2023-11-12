import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ContactsPage, Login, RegisterPage, NotFound } from 'pages';
import Layout from 'components/Layout';
import { refreshThunk } from 'redux/auth/authOperations';

import { AppContainer } from './App.styled';
import PrivateRoute from 'routes/PrivateRoute';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import HomePage from 'pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          {selectIsLoggedIn ? <Route index element={<HomePage />} /> : null}

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
};
