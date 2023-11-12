import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivateRoute from 'routes/PrivateRoute';
import { ContactsPage, Login, RegisterPage, NotFound } from 'pages';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout';
import { refreshThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
