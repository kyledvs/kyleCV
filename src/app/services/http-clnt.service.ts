import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Planets } from './planets';

@Injectable({
  providedIn: 'root',
})
export class HttpClntService {


  planetUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<Planets>(this.planetUrl);
  }
}
