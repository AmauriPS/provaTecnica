import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pesquisa } from './pesquisa';
import { Observable } from 'rxjs';

const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class PesquisaService {
  
    // Endereço da API
    url = `http://localhost:8080/api`;
  
    constructor(private http: HttpClient) { }
  
    // Método para buscar todos
    findAll(): Observable<Pesquisa[]> {
      return this.http.get<Pesquisa[]>(`${this.url}`);
    }
  
    // Método para buscar por pesquisa
    findByPesquisa(pesquisa: Pesquisa): Observable<Pesquisa[]> {
      return this.http.post<Pesquisa[]>(`${this.url}/pesquisa`, JSON.stringify(pesquisa), httpOptions);
    }

    // Método para salvar por pesquisa
    salvar(pesquisa: Pesquisa): Observable<Pesquisa> {
      return this.http.post<Pesquisa>(`${this.url}/salvar`, JSON.stringify(pesquisa), httpOptions);
    }
  }
  