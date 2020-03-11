import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaListComponent } from './pesquisa/pesquisa-list/pesquisa-list.component';
import { PesquisaFormComponent } from './pesquisa/pesquisa-form/pesquisa-form.component';

const routes: Routes = [
  { path: 'listar', component: PesquisaListComponent},
  { path: 'cadastrar', component: PesquisaFormComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
