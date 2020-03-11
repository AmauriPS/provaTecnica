import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PesquisaFormComponent } from './pesquisa-form.component';

const routes: Routes = [
    { path: '', component: PesquisaFormComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PesquisaRoutingModule { }