import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaFormComponent } from './pesquisa-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      PesquisaFormComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule, // Para o input do filtro funcionar
      
      
    ]
  })
  export class PesquisaFormModule { }
  