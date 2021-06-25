import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    // Url of the identity provider
    issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

    // Url of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',

    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'spa-demo',

    // Set the scope for the permissions the client should request
    // The first three are defined by OIDC, the 4th is a usecase-specific one
    scope: 'openid profile email voucher',
}