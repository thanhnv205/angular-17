import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { OurWorkProps, ParamProps } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class OurWorkService {

  constructor(private apiService: ApiService) { }

  getList = (url: string, params: ParamProps):Observable<OurWorkProps> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json'
    })
  }
}
