import { Injectable } from '@angular/core';


export const enum EnumToken {
  BasicAuthorization,
  UserAuthorization,
  ClientAuthorization
}

@Injectable()
export class CoreServiceLoginService extends Http {

  private localStorageService: AlimarketAuthLocalStorageService;
  private router: Router;

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    localStorageService: AlimarketAuthLocalStorageService,
    router: Router) {

    super(backend, defaultOptions);
    this.localStorageService = localStorageService;
    this.router = router;
  }

  /**
   * METODO GET
   */
  public get<T>(path: string, body: URLSearchParams, token?: EnumToken): Observable<T> {

    let headers = this.getHeadersOptions(body, token);
    let opts: RequestOptionsArgs = {
      headers: headers,
      search: body
    };

    return super.get(environment.api_rest + path, opts)
      .map(response => {
        return (response.json());
      })
      .catch(error => {
        return Observable.throw(new ErrorEntity(error.status, error.statusText, error.json()));
      });
  }

  /**
   * METODO POST
   */
  public post<T>(path: string, body: Object, token?: EnumToken): Observable<T> {

    let headers = this.getHeadersOptions(body, token);
    let opts: RequestOptionsArgs = {
      headers: headers
    };
    
    return super.post(environment.api_rest + path, body, opts)
      .map(response => {
        return (response.json());
      })
      .catch(error => {
        return Observable.throw(new ErrorEntity(error.status, error.statusText, error.json()));
      });
  }

  /**
   * METODO PUT
   */
  public put<T>(path: string, body: Object, token?: EnumToken): Observable<T> {

    let headers = this.getHeadersOptions(body, token);
    let opts: RequestOptionsArgs = {
      headers: headers
    };

    return super.put(environment.api_rest + path, body, opts)
      .map(response => {
        return (response.json());
      })
      .catch(error => {
        return Observable.throw(new ErrorEntity(error.status, error.statusText, error.json()));
      });
  }

  /**
   * METODO DELETE
   */
  public delete<T>(path: string, token?: EnumToken): Observable<T> {

    let headers = this.getHeadersOptions(null, token);
    let opts: RequestOptionsArgs = {
      headers: headers
    };

    return super.delete(environment.api_rest + path, opts)
      .map(response => {
        return (response.json());
      })
      .catch(error => {
        return Observable.throw(new ErrorEntity(error.status, error.statusText, error.json()));
      });
  }

  /**
   * METODO PATH
   */
  public patch<T>(path: string, body: Object, token?: EnumToken): Observable<T> {

    let headers = this.getHeadersOptions(body, token);
    let opts: RequestOptionsArgs = {
      headers: headers
    };

    return super.patch(environment.api_rest + path, body, opts)
      .map(response => {
        return (response.json());
      })
      .catch(error => {
        return Observable.throw(new ErrorEntity(error.status, error.statusText, error.json()));
      });
  }

  /**
   * METODO REQUEST
   */
  public request(_url: string | Request, _options?: RequestOptionsArgs): Observable<Response> {

    let url: string | Request = _url;
    let options: RequestOptionsArgs = _options;

    return super.request(url, options).catch(error => {

      if (error.status === 401) {
        return this.refresh(_url, _options).catch(errorRefresh => {

          this.router.navigate(['access-error']);
          return null;
        });
      } else {
        return Observable.throw(error);
      }
    });
  }

  /**
   * METODO REFRESH SESION
   */
  public refresh(_url: string | Request, _options?: RequestOptionsArgs): Observable<Response> {

    let body: URLSearchParams = new URLSearchParams();
    body.set('refresh_token', this.localStorageService.getUserToken().refresh_token);
    body.set('grant_type', 'refresh_token');

    return this.post('/oauth/token', body, EnumToken.BasicAuthorization)
      .flatMap(response => {

        let userToken = new TokenEntity(response);
        this.localStorageService.updateUserToken(userToken);
        let token = this.localStorageService.getUserToken().access_token;

        if (_options != null && _options !== undefined) {
          _options.headers.delete('Authorization');
          _options.headers.set('Authorization', `bearer ${token}`);
        }
        if (_url instanceof Request) {
          _url.headers.delete('Authorization');
          _url.headers.set('Authorization', `bearer ${token}`);
        }

        return this.request(_url, _options);
      });
  }

  /**
   * GENERA EL OBJETO REQUEST OPTIONS
   */
  private getHeadersOptions(params: Object, tokenType: EnumToken): Headers {

    let headers: Headers = new Headers();
    if (!params || !(params instanceof FormData)) {
      if (!(params instanceof URLSearchParams)) {
        headers.append('Content-Type', 'application/json');
      } else {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
      }
    }
   
    if (EnumToken.BasicAuthorization === tokenType) {

      headers.set('Authorization', 'Basic Y2xpZW50LWFsaW1hcmtldC1hbmd1bGFyOmNsaWVudC1hbGltYXJrZXQtYW5ndWxhci10b2tlbi1zZWNyZXQ=');

    } else if (EnumToken.UserAuthorization === tokenType || tokenType == null || tokenType === undefined) {

      let token = this.localStorageService.getUserToken().access_token;
      headers.set('Authorization', `bearer ${token}`);

    } else if (EnumToken.ClientAuthorization === tokenType) {

      let token = this.localStorageService.getClientToken().access_token;
      headers.set('Authorization', `bearer ${token}`);
    }

    return headers;
  }

}
