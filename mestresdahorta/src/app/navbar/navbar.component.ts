
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faPesquisar = faSearch;
  faCarrinho = faShoppingBasket;
  faUsuario = faUser;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair() {
    localStorage.clear();
    this.router.navigate(['/cadastro']);
  }

  btnSair() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token != null) {
      ok = true;
    }
    return ok;
  }

  btnCadastro() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token == null) {
      ok = true;
    }
    return ok;
  }
  btnAdm() {
    let ok = false;
    let perfil = localStorage.getItem('perfil');

    if (perfil === 'adm') {
      ok = true;
    }
    return ok;
  }


  teste(nome: string) {
    localStorage.setItem("id", nome);
    this.router.navigate(['/meu-perfil'])
  }

}
