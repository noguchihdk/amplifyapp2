import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="nttdata-bxo.jp.auth0.com"
    clientId="vt3mQO6LHtKKaY7jH7JjyMyOvx7Y1lWO"
    redirectUri={window.location.origin}
>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
