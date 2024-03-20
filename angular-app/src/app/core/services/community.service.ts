import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { CommunityProps, ParamProps } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  constructor(private apiService: ApiService) { }

  getList = (url: string, params: ParamProps): Observable<CommunityProps> => {

    return this.apiService.get(url, {
      params, responseType:'json'
    })
  }
}
