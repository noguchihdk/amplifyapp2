import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="nttdbxo.jp.auth0.com"
    clientId="QHe7LL4AYIgq4kZScXQDZN58VuTo7h09"
    redirectUri={window.location.origin}
    loginRedirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
