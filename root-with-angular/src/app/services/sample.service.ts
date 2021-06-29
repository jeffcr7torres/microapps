import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@ec.com.smx/kng-components-v2/k-common/k-services';
import { Observable } from 'rxjs';
import { constants } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SampleService extends BaseService {

  /**
    * Metodo constructor de la clase.
    * @param http Corresponde a la peticion http.
  */
  constructor(
    protected http: HttpClient,
  ) {
    super(http);
    this.baseUrl = constants.EXTERNAL_SERVICES.CORP_SERVICES.CONTEXT;
  }

  findUsersByCode(obj: any): Observable<any> {
    return this.post(
      `${constants.EXTERNAL_SERVICES.CORP_SERVICES.CONTROLLERS.OFFICIAL.PATH
      }${constants.EXTERNAL_SERVICES.CORP_SERVICES.CONTROLLERS.OFFICIAL.WS.GET_USERS_BY_CODE}`
      , obj);
  }
}