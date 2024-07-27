import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form';
import FormList from './components/FormList';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Form /> },
    { path: "/lista-formulario", element: <FormList /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;