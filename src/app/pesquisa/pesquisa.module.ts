import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaFormComponent } from './pesquisa-form/pesquisa-form.component';
import { pesquisaFilterPipe } from './pesquisa-form/pesquisa-filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PesquisaRoutingModule } from './pesquisa-form/pesquisa-routing.module';


@NgModule({
    declarations: [
      PesquisaFormComponent, 
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
  