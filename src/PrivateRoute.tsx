import React from 'react';
import { Route } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web';

export default function PrivateRoute({
  roles,
  component: Component,
  ...rest
}: any) {
  const [keycloak] = useKeycloak();
  const isAuthorized = () => {
    if (keycloak && roles) {
      return roles.some((r: any) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  };

  return (<Route
      {...rest}
      render={(props) => {
        if (isAuthorized()) {
          return <Component {...props} />;
        } else {
          return null;
        }
      }}
    />);
}
