import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AssuntoService {
  private apiUrl = 'http://localhost:8080/api/assunto';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(assunto: any): Observable<any> {
    return this.http.post(this.apiUrl, assunto);
  }

  update(id: number, assunto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, assunto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
