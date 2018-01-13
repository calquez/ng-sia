import { Inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Http, Response, Headers, RequestOptionsArgs, URLSearchParams, XHRBackend, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

import { AlimarketAuthHttpService } from './alimarket-auth-http.service';
import { AlimarketAuthLocalStorageService } from './alimarket-auth-local-storage.service';
import { AlimarketAuthSessionService } from './alimarket-auth-session.service';

import { UserLoginEntity } from '../model/userLogin.entity';
import { ErrorEntity } from '../model/error.entity';
import { EnumRoles, TokenEntity } from '../model/token.entity';


export enum EnumGuardError {

  NO_ACCESS_ERROR, TOKEN_ACCESS_ERROR, APP_ACCESS_ERROR, URL_ACCESS_ERROR
}

abstract class AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  public router: Router;
  public localStorageService: AlimarketAuthLocalStorageService;

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    this.router = router;
    this.localStorageService = localStorageService;
  }


  /**
     * CHECK ROL
     * metodo abstracto que controla el acceso a componentes según el rol del usaurio logado
     */
  protected abstract checkRol(token: TokenEntity): boolean;

  /**
   * CAN ACTIVATE
   * controla el acceso a componentes según el rol del usaurio logado
   */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.genericCanActivate();
  }

  /**
   * CAN ACTIVATE
   * controla el acceso a componentes según el rol del usaurio logado
   */
  public allowTransition(): boolean {

   let checkAccess = this.checkAccessToURL();

    if (checkAccess !== EnumGuardError.NO_ACCESS_ERROR) {
      return false;

    } else {
      return true;
    }
  }

  /**
   * CAN ACTIVATE CHILD
   * controla el acceso a componentes según el rol del usaurio logado
   */
  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.genericCanActivate();
  }

  /**
   * GENERIC CAN ACTIVATE
   * centraliza el acceso a componentes
   */
  protected genericCanActivate(): boolean {

    let checkAccess = this.checkAccessToURL();

    if (checkAccess !== EnumGuardError.NO_ACCESS_ERROR) {

      let navigationExtras: NavigationExtras = {
        queryParams: { 'access_error': checkAccess },
      };
      this.router.navigate(['/access-error'], navigationExtras);
      return false;

    } else {
      return true;
    }
  }

  /**
   * CHECK ACCESS TO URL
   * controla el acceso a una url determinada
   */
  protected checkAccessToURL(): EnumGuardError {

    let result: EnumGuardError = this.checkAccessToApp();

    if (result === EnumGuardError.NO_ACCESS_ERROR) {

      let token: TokenEntity = this.localStorageService.getUserToken();
      if (!this.checkRol(token)) {
        result = EnumGuardError.URL_ACCESS_ERROR;
      }
    }

    return result;
  }

  /**
   * CHECK ACCESS TO APP
   * controla el acceso a la aplicación
   */
  protected checkAccessToApp(): EnumGuardError {

    let result: EnumGuardError = this.checkLogin();

    if (result === EnumGuardError.NO_ACCESS_ERROR) {

      let token: TokenEntity = this.localStorageService.getUserToken();
      if (!token.hasRole(EnumRoles.ROLE_ALIMARKET_USER)) {
        result = EnumGuardError.APP_ACCESS_ERROR;
      }
    }

    return result;
  }

  /**
   * CHECK LOGIN
   * controla que existe un usuario logado
   */
  protected checkLogin(): EnumGuardError {

    let result: EnumGuardError = EnumGuardError.NO_ACCESS_ERROR;

    if (this.localStorageService.getUserToken() == null
      || this.localStorageService.getUserToken() === undefined) {

      return EnumGuardError.TOKEN_ACCESS_ERROR;
    }

    return result;
  }
}

@Injectable()
export class AlimarketAuthGuardAlimarketService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_ALIMARKET_USER);
  }
}

@Injectable()
export class AlimarketAuthGuardPromocionesService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_GESTION_EVENTOS) || token.hasRole(EnumRoles.ROLE_GESTION_INSCRIPCIONES);
  }
}

@Injectable()
export class AlimarketAuthGuardEventsService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_GESTION_EVENTOS) || token.hasRole(EnumRoles.ROLE_GESTION_INSCRIPCIONES);
  }
}

@Injectable()
export class AlimarketAuthGuardEventsEditService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_GESTION_EVENTOS);
  }
}

@Injectable()
export class AlimarketAuthGuardInscriptionsService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_GESTION_INSCRIPCIONES);
  }
}

@Injectable()
export class AlimarketAuthGuardNewsletterService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_ADMIN_NEWSLETTER);
  }
}

@Injectable()
export class AlimarketAuthGuardHeadlinesService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_ADMIN_TITULARES);
  }
}

@Injectable()
export class AlimarketAuthGuardUserRolesService extends AlimarketAuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    router: Router,
    localStorageService: AlimarketAuthLocalStorageService) {

    super(router, localStorageService);
  }

  protected checkRol(token: TokenEntity): boolean {
    return token.hasRole(EnumRoles.ROLE_ADMIN_ROLES);
  }
}
