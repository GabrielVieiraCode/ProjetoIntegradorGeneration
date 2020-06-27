import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getAllContato(){
    return this.http.get('http://localhost:8080/contato')
  }
  
}
