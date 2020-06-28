import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  faUsuario = faUser;
  faCarrinho = faShoppingBasket;

  nome: string = localStorage.getItem('nome')
  usuario: string = localStorage.getItem('usuario')

  constructor() { }

  ngOnInit(): void {

    window.scroll(0, 0)

  }

  dadoUsuario() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token != null) {
      ok = true;
    }
    return ok;
  }
  inputPerfil() {
    let ok = true;
    let token = localStorage.getItem('token');

    if (token == null) {
      ok = false;
    }
    return ok;
  }

}
