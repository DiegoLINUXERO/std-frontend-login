import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ILoginUserRequest } from '../../models/requests/login-user-request.interface';
import { ILoginUserResponse } from '../../models/responses/login-user-response.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(request: ILoginUserRequest): Observable<ILoginUserResponse> {
    const  {seed, password} = request;
    const loginForm = {
      seed,
      userCredentialId: request.username,
      password: {
        SelectedKey: password,
      },
    };
    return environment.mockFront ?
    this.mockFront(request.username)
    :
    this.http.post<ILoginUserResponse>(
      `${environment.apiStd.baseURLLogin}${environment.apiStd.servicePath.loginUser}`,
      loginForm,
      { headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e') }
    );
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-santander-client-id': 'SESSION=' + token,
    });
    return headers;
  }

  mockFront (password: string) : Observable<ILoginUserResponse>{
    let response = {} as ILoginUserResponse;
    switch (password) {
      //HU1. Escenario 1 - Ingreso correcto de usuario nuevo con clave de 4 dígitos generada por el banco
      case "escenario1":
        response = {
          credentialOwner: {
            isFirstLogin: true,
            success: true,
            retry: 0,
            
          },
          sessionToken: {
            auth: '',
            refresh: '',
          }
        } 
        break;
        case "escenario2":
          response = {
            credentialOwner: {
              isFirstLogin: false,
              success: false,
              retry: 2,
              
            },
            sessionToken: {
              auth: '',
              refresh: '',
            }
          } 
          break;
          case "escenario3":
            response = {
              credentialOwner: {
                isFirstLogin: false,
                success: false,
                retry: 1,
                
              },
              sessionToken: {
                auth: '',
                refresh: '',
              }
            } 
            break;
            case "escenario4":
              response = {
                credentialOwner: {
                  isFirstLogin: false,
                  success: false,
                  retry: -1,
                  
                },
                sessionToken: {
                  auth: '',
                  refresh: '',
                }
              } 
              break;
      default:
        break;
    }
    return of(response)
  }

}
