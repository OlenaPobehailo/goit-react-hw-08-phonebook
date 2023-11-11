import { Route, Routes } from 'react-router-dom';

import { ContactsPage, Login, Register, NotFound } from 'pages';
import Layout from 'components/Layout';

import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Hello!</h1>} />

          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
};
