import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreNosComponent,
    CadastroComponent,
    ProdutosComponent,
    DescricaoComponent,
    FaqComponent,
    ContatoComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
