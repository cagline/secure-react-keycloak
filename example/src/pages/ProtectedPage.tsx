import React from 'react';
import { useKeycloak } from 'secure-react-keycloak'

const ProtectedPage = () => {
  const [keycloak, initialized] = useKeycloak();

  return (<div>
    <h1>Protected Page</h1>

    {initialized ? keycloak.authenticated && <pre>{JSON.stringify(keycloak, undefined, 2)}</pre> :
      <h2>keycloak initializing ....!!!!</h2>}
  </div>)
}
export default ProtectedPage
