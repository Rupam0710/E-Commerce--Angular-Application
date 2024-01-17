import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../config/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = BASE_API_URL + '/auth';

  public ProceedRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }

  public GetUsersData() {
    return this.http.get<any>(this.apiUrl)
  }

  private isAuthenticated: boolean = false;

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  public login(): void {

    this.isAuthenticated = true;

  }


  logout(): void {

    localStorage.removeItem('username');


    this.isAuthenticated = false;
  }



}
