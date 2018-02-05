import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../domain/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto = {};
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
    .subscribe(produtos => this.produtos = produtos);
  }

  new(): void {
    this.produto = {};
  }

  save(): void {
    if (this.produto.id == undefined) {
      this.produtoService.saveProduto(this.produto);
    } else {
      this.produtoService.updateProduto(this.produto);
    }
  }

  delete(produto: Produto): void {
  console.log('asdf: ' + produto.id);
    this.produtoService.deleteProduto(produto.id);
  }

  onSelect(selectedProduto: Produto): void {
    this.produto = selectedProduto;
  }

}
