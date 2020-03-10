import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaListComponent } from './pesquisa-list/pesquisa-list.component';

const routes: Routes = [{ path: 'listar', component: PesquisaListComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
