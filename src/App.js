import React from 'react';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import Profile from './Profile';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain="nttdata-partner.auth0.com"
        clientId="PSBpf1hFP1t3YwzchJ9cN7qm2XJHfqaD"
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path="/" exact />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
        </Routes>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  );
}