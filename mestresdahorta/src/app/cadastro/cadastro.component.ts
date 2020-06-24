import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Usuarios = new Usuarios
  login: Usuarios = new Usuarios

  confirmaSenha: string

  alerta: boolean = false


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }
  cadastrar() {
    // valicao nome 
    if (this.cadastro.nome == null || this.cadastro.nome == "") {
      // this.alertanome = true
    }
    // validacao email
    else if (this.cadastro.email == null || this.cadastro.email == "") {
      // this.alertaemail = true
    }
    // validacao senha 
    else if (this.cadastro.senha == null || this.cadastro.senha == "") {
      // this.alertasenha = true
    }
    // validacao confirma senha
    else if (this.cadastro.senha !== this.confirmaSenha) {
      // this.alertaconfirmasenha = true
    }


    else {
      this.usuariosService.cadastroUsuario(this.cadastro).subscribe((resp: Usuarios) => {
        this.cadastro = resp
        location.assign('/cadastro')

      })
    }

  }

  fazerLogin() {

    // VALIDAÇÃO CAMPO NOME LOG IN
    if (this.login.usuario == null || this.login.usuario == "") {
      this.alerta = true
    }
    else if (this.login.senha == null || this.login.senha == "") {
      this.alerta = true
    }

    else {
      this.usuariosService.cadastroUsuario(this.login).subscribe((resp: Usuarios) => {
        this.login = resp
        location.assign('/cadastro')

      })
    }

  }

  validaCampos() { }

}
