import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const strapiUrl = 'http://localhost:1337/tutorials/';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(strapiUrl);
  }


}
