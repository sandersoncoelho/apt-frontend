import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesaComponent }   from './despesa/despesa.component';
import { ProdutoComponent }   from './produto/produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/despesa', pathMatch: 'full' },
  { path: 'despesa', component: DespesaComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}