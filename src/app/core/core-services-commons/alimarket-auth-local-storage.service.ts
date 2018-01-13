import { Injectable } from '@angular/core';

import { TokenEntity } from '../model/token.entity';


class EnumLoggedType {

  static ClientToken = 'client-token-alimarket';
  static UserToken = 'user-token-alimarket';
  constructor(public value: string) { }
  public toString(): string {
    return this.value;
  }
}


@Injectable()
export class AlimarketAuthLocalStorageService {

  constructor() { }

  /**
   * METODO SET USER LOGGED
   *
   * establece un objeto en el local storage con la informacion del usuario logado
   */
  public setUserToken(token: TokenEntity): void {
    localStorage.setItem(EnumLoggedType.UserToken.toString(), JSON.stringify(token));
  }

  /**
   * METODO UPDATE USER LOGGED
   *
   * acturaliza un objeto en el local storage con la informacion del usuario logado
   */
  public updateUserToken(token: TokenEntity): void {
    localStorage.removeItem(EnumLoggedType.UserToken.toString());
    localStorage.setItem(EnumLoggedType.UserToken.toString(), JSON.stringify(token));
  }

  /**
   * METODO GET USER LOGGED
   *
   * retorna un objeto del local storage con la informacion del usuario logado
   */
  public getUserToken(): TokenEntity {

    if (localStorage.getItem(EnumLoggedType.UserToken.toString())) {
      let token = new TokenEntity(JSON.parse(localStorage.getItem(EnumLoggedType.UserToken.toString())));
      return token;
    } else {
      return null;
    }
  }

  /**
   * METODO SET CLIENT LOGGED
   *
   * establece un objeto en el local storage con la informacion del usuario logado
   */
  public setClientToken(token: TokenEntity): void {
    localStorage.setItem(EnumLoggedType.ClientToken.toString(), JSON.stringify(token));
  }

  /**
   * METODO UPDATE CLIENT LOGGED
   *
   * acturaliza un objeto en el local storage con la informacion del usuario logado
   */
  public updateClientToken(token: TokenEntity): void {
    localStorage.removeItem(EnumLoggedType.ClientToken.toString());
    localStorage.setItem(EnumLoggedType.ClientToken.toString(), JSON.stringify(token));
  }

  /**
   * METODO GET CLIENT LOGGED
   *
   * retorna un objeto del local storage con la informacion del usuario logado
   */
  public getClientToken(): TokenEntity {

    if (localStorage.getItem(EnumLoggedType.ClientToken.toString())) {
      let token = new TokenEntity(JSON.parse(localStorage.getItem(EnumLoggedType.ClientToken.toString())));
      return token;
    } else {
      return null;
    }
  }

  /**
   * METODO CLEAN USER LOGGED
   *
   * limpia el local storage
   */
  public clean(): void {

    localStorage.removeItem(EnumLoggedType.UserToken.toString());
    localStorage.removeItem(EnumLoggedType.ClientToken.toString());
    localStorage.clear();
  }

}
