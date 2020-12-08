import { Component, Inject } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sso-app';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private oauthService:OAuthService) {
    this.configureSingleSignOn();
  }

  public data:any = []

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get token() {
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
