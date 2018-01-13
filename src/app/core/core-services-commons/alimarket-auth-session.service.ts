import { Injectable } from '@angular/core';
import { URLSearchParams, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AlimarketAuthHttpService, EnumToken } from './alimarket-auth-http.service';
import { AlimarketAuthLocalStorageService } from './alimarket-auth-local-storage.service';

import { ErrorEntity } from '../model/error.entity';
import { TokenEntity } from '../model/token.entity';
import { UserLoginEntity } from '../model/userLogin.entity';


@Injectable()
export class AlimarketAuthSessionService {

    constructor(
        private httpService: AlimarketAuthHttpService,
        private localStorageService: AlimarketAuthLocalStorageService,
        private router: Router ) {

    }

    /**
     * METODO LOGIN
     */
    public loginUser( userLogin: UserLoginEntity ): Observable<TokenEntity | Response> {

        let body: URLSearchParams = new URLSearchParams();
        body.set( 'username', userLogin.email );
        body.set( 'password', userLogin.password );
        body.set( 'grant_type', 'password' );
        body.set( 'scope', 'general' );

        return this.httpService.post( '/oauth/token', body, EnumToken.BasicAuthorization )
            .map( response => {

                let userToken = new TokenEntity( response );
                this.localStorageService.setUserToken( userToken );
                return userToken;
            })
            .catch( error => {
                console.log(error);
                return Observable.throw( new ErrorEntity( error.httpStatus, error.httpStatusText, error.error ) );
            });
    }

    /**
     * METODO LOGIN CLIENT
     */
    public loginClient( userLogin: UserLoginEntity ): Observable<TokenEntity | Response> {

        let body: URLSearchParams = new URLSearchParams();
        body.set( 'grant_type', 'client_credentials' );
        body.set( 'client_id', 'client-alimarket-angular' );

        return this.httpService.post( '/oauth/token', body, EnumToken.BasicAuthorization )
            .map( response => {

                let token = new TokenEntity( response );
                this.localStorageService.setClientToken( token );
                return token;
            })
            .catch( error => {
                return Observable.throw( new ErrorEntity( error.httpStatus, error.httpStatusText, error.error ) );
            });
    }

    /**
     * METODO CLOSE
     *
     * cierra la aplicacion sin cerrar la sesion de alimarket
     */
    public close() {

        this.localStorageService.clean();
        this.router.navigate( [''] );
    }

    /**
     * METODO LOGOUT
     *
     * cierra la aplicacion cerrando la sesion de alimarket
     */
    public logout(): Observable<any> {

        let body: URLSearchParams = new URLSearchParams();
        try {
            let token = this.localStorageService.getUserToken().access_token;
            body.set( 'token', token );

            return this.httpService.post( '/oauth/token/revoke', body )
                .map( response => {

                    this.localStorageService.clean();
                    this.router.navigate( [''] );
                })
                .catch( error => {
                    return Observable.throw( new ErrorEntity( error.httpStatus, error.httpStatusText, error.error ) );
                });
        } catch (e) {
            return Observable.throw(e);
        }
    }
}
