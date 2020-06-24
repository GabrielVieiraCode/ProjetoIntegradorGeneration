import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component'
/*import { ContatoComponent } from './contato/contato.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { FaqComponent } from './faq/faq.component'
import { MeuperfilComponent } from './meuperfil/meuperfil.component'

import { ProdutoComponent } from './administrador/produto/produto.component';
import { ProdutoEditarComponent } from './administrador/produto-editar/produto-editar.component';
import { ProdutoDeletarComponent } from './administrador/produto-deletar/produto-deletar.component';

import { UsuarioComponent } from './administrador/usuario/usuario.component';
import { UsuarioDeletarComponent } from './administrador/usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './administrador/usuario-editar/usuario-editar.component';
*/
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: SobreNosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produtos', component: ProdutosComponent }
  /*{ path: 'contato', component: ContatoComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'meuperfil', component: MeuperfilComponent },

  { path: 'administrador/produtos', component: ProdutoComponent },
  { path: 'administrador/produtos/editar/:id', component: ProdutoEditarComponent },
  { path: 'administrador/produtos/deletar/:id', component: ProdutoDeletarComponent },

  { path: 'administrador/usuarios', component: UsuarioComponent },
  { path: 'administrador/usuarios/editar/:id', component: UsuarioEditarComponent },
  { path: 'administrador/usuarios/deletar/:id', component: UsuarioDeletarComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
