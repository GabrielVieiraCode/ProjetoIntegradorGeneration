import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produtos[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos();
    
}


findAllProdutos() {
  this.produtosService.findAllProdutos().subscribe((resp: Produtos[]) => {
    this.listaProdutos = resp;
  })
}
}


