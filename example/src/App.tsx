import React from 'react'

import { KeycloakProvider } from 'secure-react-keycloak'
import 'secure-react-keycloak/dist/index.css'
import keycloak from "./keycloak";
import { AppRouter } from "./routes/index";

const App = () => {
  return (<KeycloakProvider keycloak={keycloak}>
    <div>
      <h1>Keycloak</h1>
      <AppRouter/>
    </div>
  </KeycloakProvider>)
}

export default App
