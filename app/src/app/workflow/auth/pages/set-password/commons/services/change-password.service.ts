import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { IChangePasswordRP, IChangePasswordRQ } from '../models/change-password.intrefaces';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private http: HttpClient) {}

  changePassword(request: IChangePasswordRQ): Observable<IChangePasswordRP> {
    return this.http.post<IChangePasswordRP>(
        `${environment.apiStd.baseURLChangePassword}${environment.apiStd.servicePath.changePassword}`,
        request,
        { headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e') }
      );
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
      'x-santander-client-id': 'SESSION=' + token,
    });
    return headers;
  }
}
