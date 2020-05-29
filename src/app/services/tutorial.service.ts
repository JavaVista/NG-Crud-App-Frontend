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

  get(id) {
    return this.http.get(`{strapiUrl}/${id}`);
  }

  create(data) {
    return this.http.post(strapiUrl, data);
  }

  update(id, data) {
    return this.http.put(`${strapiUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${strapiUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(strapiUrl);
  }

  findByTitle(title) {
    return this.http.get(`${strapiUrl}?title=${title}`);
  }

}
