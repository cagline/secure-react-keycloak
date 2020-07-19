import { useKeycloak } from '@react-keycloak/web';

export type currentUserRole = any[] | undefined;

export default function AuthorizedFunction(roles: any) {
  const [keycloak] = useKeycloak();

  const isAuthorized = () => {
    console.log('isAuthorized ', keycloak && roles)

    if (keycloak && roles) {
      return roles.some((r: any) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        debugger
        console.log('realm , resource',realm , resource)
        return realm || resource;
      });
    }
    return false;
  };

  return isAuthorized();
}
