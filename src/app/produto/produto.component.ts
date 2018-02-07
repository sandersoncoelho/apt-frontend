import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../domain/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  formGroup: FormGroup;
  produtoId: number;
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.getProdutos();
    this.formGroup = new FormGroup({
      descricao: new FormControl('', [Validators.required]),
      imagemUrl: new FormControl('', [Validators.required]),
      dataFabricacao: new FormControl('', [Validators.required]),
      dataValidade: new FormControl('', [Validators.required])
    });
  }

  getProdutos() {
    this.produtoService.getProdutos()
    .subscribe(produtos => this.produtos = produtos);
  }

  new() {
    this.formGroup.reset();
    this.produtoId = undefined;
  }

  save() {
    var produto = this.formGroup.value;
    produto.id = this.produtoId;
    
    if (this.produtoId == undefined) {
      this.produtoService.saveProduto(produto);
    } else {
      this.produtoService.updateProduto(produto);
    }
  }

  delete(produto: Produto) {
    this.produtoService.deleteProduto(produto.id);
  }

  onSelect(selectedProduto: Produto) {
    this.produtoId = selectedProduto.id;
    this.formGroup.setValue({
      descricao: selectedProduto.descricao,
      imagemUrl: selectedProduto.imagemUrl,
      dataFabricacao: selectedProduto.dataFabricacao,
      dataValidade: selectedProduto.dataValidade
    });
  }

}
