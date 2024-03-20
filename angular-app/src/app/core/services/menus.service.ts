import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

import { MenuProps, ParamProps } from '../../../types';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  constructor(private apiService: ApiService) {}

  getMenus = (url: string, params: ParamProps): Observable<MenuProps[]> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
