import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  // public guardandoDadosFiltrados: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get("http://localhost:3000/usuarios");
  }
}
