import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    url = `${environment.production}/pesquisa`;
  
    constructor(private http: HttpClient) { }
  
    // Método para buscar todos
    findAll(): Observable<Pesquisa[]> {
      return this.http.get<Pesquisa[]>(`${this.url}`);
    }
  
    // Método para buscar por ID
    findById(id: number): Observable<Pesquisa> {
      return this.http.get<Pesquisa>(`${this.url}/${id}`);
    }
  
    // Método para salvar
    save(carro: Pesquisa): Observable<Pesquisa> {
      if(carro.id){
        return this.http.put<Pesquisa>(`${this.url}`, JSON.stringify(Pesquisa), httpOptions);
      } else {
        return this.http.post<Pesquisa>(`${this.url}`, JSON.stringify(Pesquisa), httpOptions);
      }
    }
  
    // Método para deletar por ID
    deteleById(id: number): Observable<any> {
      return this.http.delete(`${this.url}/${id}`);
    }
  }
  