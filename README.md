
# secure-react-keycloak

> Secure React Routes &amp; Component with Keycloak
> This is a library which provides utilities to restrict React routes & component/function
> This library uses [React Keycloak](https://github.com/panz3r/react-keycloak#readme) library as a based library.
> If you feel lazy to write your own utilities, this is the library you looking for.

[![NPM](https://img.shields.io/npm/v/secure-react-keycloak.svg)](https://www.npmjs.com/package/secure-react-keycloak) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save secure-react-keycloak
```

## Usage

Create a `keycloak.js` file in the src folder of your project with the following content to **set up a Keycloak instance as needed**.


### Set up a Keycloak instance

```ts
import Keycloak from 'keycloak-js'

const keycloakConfig = {
 url: 'http://localhost:8080/auth',
 realm: 'Demo',
 clientId: 'react-app'
}

const keycloak = new Keycloak(keycloakConfig);

export default keycloak
```
### Then Wrap your App inside `KeycloakProvider` and pass the `keycloak` instance as prop
```ts
import React from 'react';
import { KeycloakProvider } from 'secure-react-keycloak';
import keycloak from './keycloak'

// Wrap everything inside KeycloakProvider
const App = () => {
	return (
		<KeycloakProvider keycloak={keycloak}>
		<div className="App"> ... </div>
		</KeycloakProvider>
	)
}
```
  ### Restrict Routes - Usage
```ts

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../components/Menu';
import HomePage from '../pages/HomePage';
import ProtectedPage from '../pages/ProtectedPage';

import { PrivateRoute, useKeycloak } from 'secure-react-keycloak';

export const AppRouter = () => {

	const [, initialized] = useKeycloak();

	if (!initialized) {
		return <h3>Loading ... !!!</h3>;
	}

	return (<>
		<Menu />
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<PrivateRoute roles={['RealmAdmin']} path="/protected" component={ProtectedPage} />
			</Switch>
		</BrowserRouter>
	</>
	);
};
```

  ### Restrict Element - Usage
```ts

import React from 'react';
import { useKeycloak, AuthorizedElement } from 'secure-react-keycloak'

const HomePage = () => {
  const [keycloak, initialized] = useKeycloak();

 return (<div>
	 <h1>Home Page</h1>

	 <strong>Anyone can access this page</strong>

	 <h2>Only Realm Admin Can Access below Button</h2>
	 <AuthorizedElement roles={['RealmAdmin']}><h1>Realm Admin </h1></AuthorizedElement>

	 <h2>Only Client Admin Can Access below Button</h2>
	 <AuthorizedElement roles={['ClientAdmin']}><h1>Client Admin</h1></AuthorizedElement>

	  {initialized ? keycloak.authenticated && <pre>{JSON.stringify(keycloak, undefined, 2)}</pre> :
	      <h2>keycloak initializing ....!!!!</h2>}
	  </div>)
}
export default HomePage
```

  ### Restrict with function - Usage

```ts
import AuthorizedFunction from 'secure-react-keycloak';

export type currentUserRole = any[] | undefined;

export default function MyButton({ roles, children }: any) {

	return AuthorizedFunction(roles) && <Button>MyButton</Button>;

}
```
## License

MIT © [cagline](https://github.com/cagline)
