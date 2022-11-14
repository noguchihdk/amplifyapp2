import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello name:{user.name}{' '}
        address:{user.address}{' '}
        birthdate:{user.birthdate}{' '}
        email:{user.email}{' '}
        email_verified:{user.email_verified}{' '}
        family_name:{user.family_name}{' '}
        gender:{user.gender}{' '}
        given_name:{user.given_name}{' '}
        locale:{user.locale}{' '}
        middle_name:{user.middle_name}{' '}
        name:{user.name}{' '}
        nickname:{user.nickname}{' '}
        phone_number:{user.phone_number}{' '}
        phone_number_verified:{user.phone_number_verified}{' '}
        picture:{user.picture}{' '}
        preferred_username:{user.preferred_username}{' '}
        profile:{user.profile}{' '}
        sub:{user.sub}{' '}
        updated_at:{user.updated_at}{' '}
        website:{user.website}{' '}
        zoneinfo:{user.zoneinfo}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;