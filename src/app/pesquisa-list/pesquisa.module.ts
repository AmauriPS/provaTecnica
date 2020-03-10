import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaFormComponent } from '../pesquisa-form/pesquisa-form.component';
import { PesquisaListComponent } from './pesquisa-list.component';
import { pesquisaFilterPipe } from './pesquisa-filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PesquisaRoutingModule } from './pesquisa-routing.module';


@NgModule({
    declarations: [
      PesquisaFormComponent, 
      PesquisaListComponent, 
      pesquisaFilterPipe
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule, // Para o input do filtro funcionar
      PesquisaRoutingModule,
      
    ]
  })
  export class PesquisaModule { }
  