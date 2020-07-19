import AuthorizedFunction from './AuthorizedFunction';

export type currentUserRole = any[] | undefined;

export default function AuthorizedElement({ roles, children }: any) {
  return AuthorizedFunction(roles) && children;
}
