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

  constructor() { }

  ngOnInit(): void {
    let aux = localStorage.getItem("id");
    this.scroll(aux);
  }

  scroll(param): void {
    if (param == "cesta") {
      window.scroll(0, 1100)
    }
    else {
      window.scroll(0, 0)
    }
    localStorage.removeItem("id")
  }

}
