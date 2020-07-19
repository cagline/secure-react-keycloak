import React from 'react';
import { withKeycloak } from 'secure-react-keycloak'

const Menu = ({ keycloak }: any) => {

  return (
    <ul style={{background:'yellow'}}>
      <li><a href="/">Home Page </a></li>

      {keycloak && !keycloak.authenticated &&
      <li><a className="btn-link" onClick={() => keycloak.login()}>Login</a></li>
      }

      {keycloak && keycloak.authenticated &&
      <li>
        <a className="btn-link" onClick={() => keycloak.logout()}>Logout ({
          keycloak.tokenParsed.preferred_username
        })</a>
      </li>
      }

    </ul>
  )
}

export default withKeycloak(Menu)
