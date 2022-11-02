import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="nttdata-partner.auth0.com"
    clientId="hrfJqQ6pE4EmWuVSiuBH6GnNSTBLLck7"
    redirectUri={window.location.origin}
    loginRedirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
