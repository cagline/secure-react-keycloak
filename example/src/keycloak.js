import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://10.101.15.26:8082/auth',
  realm: 'zwlpm',
  clientId: 'webapp'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
