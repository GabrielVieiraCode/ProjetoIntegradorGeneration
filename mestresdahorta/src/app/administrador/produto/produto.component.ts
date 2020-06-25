import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import { Produtos } from 'src/app/model/Produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos: Produtos[];

  produto: Produtos = new Produtos;

  alerta: boolean = false;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos();

    let item: string = localStorage.getItem('delOk');

    if (item == 'true') {
      this.alerta = true;
      localStorage.clear();


      setTimeout(() => {
        location.assign('/administrador/produtos');
      }, 3000)

    }
  }

  findAllProdutos() {
    this.produtosService.findAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp;
    })
  }

  postProduto() {
    this.produtosService.postProdutos(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp;
      location.assign('/administrador/produtos');
    })
  }

}