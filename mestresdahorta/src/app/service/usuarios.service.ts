import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../model/Usuarios';

// import { Usuarios} from '../model/Usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // CRUD

  findAllUsuarios() {
    return this.http.get('http://localhost:8080/usuarios');
  }
  cadastroUsuario(cadastro: Usuarios) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', cadastro)
  }
  // loginUsuario(login: UsuarioLogin) {
  //   return this.http.post('http://localhost:8080/usuarios/logar', login)
  // }

  editarUsuario(editar: Usuarios) {
    return this.http.put('http://localhost:8080/usuarios', editar)
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }
  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }

}
