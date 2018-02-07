import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { DespesaComponent } from './despesa/despesa.component';

import { ProdutoService }          from './service/produto.service';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    DespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
