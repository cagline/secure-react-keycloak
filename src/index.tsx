import AuthorizedFunction from './AuthorizedFunction';
import AuthorizedElement from './AuthorizedElement';
import PrivateRoute from './PrivateRoute';
import {
  KeycloakProvider,
  useKeycloak,
  withKeycloak,
  ReactKeycloakInjectedProps,
  ReactKeycloakHookResult
} from '@react-keycloak/web';

export { AuthorizedFunction };
export { AuthorizedElement };
export { PrivateRoute };
export {
  KeycloakProvider,
  useKeycloak,
  withKeycloak,
  ReactKeycloakInjectedProps,
  ReactKeycloakHookResult
};

export {
  KeycloakEvent,
  KeycloakEventHandler,
  KeycloakLoadingCheck,
  KeycloakTokens,
  KeycloakTokensHandler
} from '@react-keycloak/core';
