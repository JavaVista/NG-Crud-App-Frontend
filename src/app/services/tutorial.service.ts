import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const strapiUrl = 'http://localhost:1337/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(strapiUrl);
  }

  get(id: number) {
    return this.http.get(`${strapiUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(strapiUrl, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${strapiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${strapiUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(strapiUrl);
  }

  findByName(name: string) {
    return this.http.get(`${strapiUrl}?name=${name}`);
  }

}
