import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Produto } from '../domain/produto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class ProdutoService {

  private produtoUrl = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtoUrl);
  }

  saveProduto(produto: Produto): Observable<any> {
    this.http.post<Produto>(this.produtoUrl, produto)
      .subscribe(res => console.log(res));
  }

  updateProduto(produto: Produto): Observable<any> {
    this.http.put<Produto>(this.produtoUrl, produto, httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteProduto(produtoId: number): Observable<any> {
    const url = `${this.produtoUrl}/${produtoId}`;
    this.http.delete<Produto>(url, httpOptions)
      .subscribe(res => console.log(res));;
  }
}
