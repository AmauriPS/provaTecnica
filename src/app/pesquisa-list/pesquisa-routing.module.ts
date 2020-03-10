import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PesquisaListComponent } from './pesquisa-list.component';

const routes: Routes = [
    { path: '', component: PesquisaListComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PesquisaRoutingModule { }