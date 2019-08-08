import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _registerUrl = "http://localhost:4000/api/register"
  private _loginUrl = "http://localhost:4000/api/login"

  constructor( private http: HttpClient) { }
 

  registerUser(User) {
    return this.http.post<any>(this._registerUrl,User)
  }

  loginUser(User) {
    return this.http.post<any>(this._loginUrl,User)
    
  }
}
