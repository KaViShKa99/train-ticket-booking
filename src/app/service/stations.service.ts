import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  getAllStations() {
    return this.http.get(`${this.apiEndPoint}GetAllStations`);
  }
}
