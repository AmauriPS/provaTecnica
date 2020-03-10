import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PesquisaListComponent } from './pesquisa-list.component';
import { PesquisaFormComponent } from '../pesquisa-form/pesquisa-form.component';

const routes: Routes = [
    { path: '', component: PesquisaListComponent },
    { path: 'novo', component: PesquisaFormComponent},
    { path: 'editar/:id', component:PesquisaFormComponent},
    { path: 'visualizar/:id', component: PesquisaFormComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PesquisaRoutingModule { }