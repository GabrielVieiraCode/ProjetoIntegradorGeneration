import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { UsuariosService } from '../service/usuarios.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Usuarios = new Usuarios
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  senha: string
  confirmaSenha: string

  alerta: boolean = false
  alertaConfirma: boolean = false


  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {

    window.scroll(0, 0)

  }
  cadastrar() {
    // // valicao nome 
    // if (this.cadastro.nome == null || this.cadastro.nome == "") {
    //   // this.alertanome = true
    // }
    // // validacao email
    // else if (this.cadastro.email == null || this.cadastro.email == "") {
    //   // this.alertaemail = true
    // }
    // // validacao senha 
    // else if (this.cadastro.senha == null || this.cadastro.senha == "") {
    //   // this.alertasenha = true
    // }
    // // validacao confirma senha
    // else if (this.cadastro.senha !== this.confirmaSenha) {
    //   // this.alertaconfirmasenha = true
    // }


    // else {

    if (this.cadastro.senha === this.confirmaSenha) {
      this.usuariosService.cadastroUsuario(this.cadastro).subscribe((resp: Usuarios) => {
        this.cadastro = resp;
        this.alertaConfirma;
        // location.assign('/cadastro')
        this.router.navigate(['/home']);
      });
    }

  }

  fazerLogin() {

    // VALIDAÇÃO CAMPO NOME LOG IN
    /* if (this.login.usuario == null || this.login.usuario == "") {
       this.alerta = true
     }
     else if (this.login.senha == null || this.login.senha == "") {
       this.alerta = true
     }*/
    this.usuariosService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token);
      localStorage.setItem('nome', this.usuarioLogin.nome);
      localStorage.setItem('usuario', this.usuarioLogin.usuario);
      this.router.navigate(['/produtos']);
    })

  }

  validaCampos() { }

}
