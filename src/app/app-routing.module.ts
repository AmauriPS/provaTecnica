import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaFormComponent } from './pesquisa-form/pesquisa-form.component';

const routes: Routes = [
  { path: 'pesquisar', component: PesquisaFormComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
