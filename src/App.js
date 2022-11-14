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
        Hello <p /> 
        address:{user.address}{' '} <br />
        birthdate:{user.birthdate}{' '} <br />
        email:{user.email}{' '} <br />
        email_verified:{user.email_verified}{' '} <br />
        family_name:{user.family_name}{' '} <br />
        gender:{user.gender}{' '} <br />
        given_name:{user.given_name}{' '} <br />
        locale:{user.locale}{' '} <br />
        middle_name:{user.middle_name}{' '} <br />
        name:{user.name}{' '} <br />
        nickname:{user.nickname}{' '} <br />
        phone_number:{user.phone_number}{' '} <br />
        phone_number_verified:{user.phone_number_verified}{' '} <br />
        picture:{user.picture}{' '} <br />
        preferred_username:{user.preferred_username}{' '} <br />
        profile:{user.profile}{' '} <br />
        sub:{user.sub}{' '} <br />
        updated_at:{user.updated_at}{' '} <br />
        website:{user.website}{' '} <br />
        zoneinfo:{user.zoneinfo}{' '} <br />
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