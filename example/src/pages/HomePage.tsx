import React from 'react';
import { useKeycloak, AuthorizedElement } from 'secure-react-keycloak'

const HomePage = () => {
  const [keycloak, initialized] = useKeycloak();

  return (<div>
    <h1>Home Page</h1>

    <strong>Anyone can access this page</strong>

    <h2>Only Admin Can Access below Button</h2>
    <AuthorizedElement roles={['WLAdmin']}><h1>Admin</h1></AuthorizedElement>

    <h2>Only Manager Can Access below Button</h2>
    <AuthorizedElement roles={['WLManager']}><h1>Manager</h1></AuthorizedElement>

    {initialized ? keycloak.authenticated && <pre>{JSON.stringify(keycloak, undefined, 2)}</pre> :
      <h2>keycloak initializing ....!!!!</h2>}
  </div>)
}
export default HomePage
