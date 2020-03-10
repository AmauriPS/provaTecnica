import { Component, OnInit } from '@angular/core';
import { Pesquisa } from './pesquisa';
import { PesquisaService } from './pesquisa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pesquisa-list',
  templateUrl: './pesquisa-list.component.html',
  styleUrls: ['./pesquisa-list.component.css']
})
export class PesquisaListComponent implements OnInit {

  // Declarações de variáveis
  // pesquisas: Pesquisa[];
  pesquisa: Pesquisa;
  pesquisas: Pesquisa[];
  pesquisaForm: FormGroup;
  
  constructor(private pesquisaService: PesquisaService,
    private builder: FormBuilder) { }

  ngOnInit() {

    this.pesquisas = []
    this.pesquisa= {id: 1,
      descricao: "Descrição do objeto",
      sigla: "Sigla do objeto",
      email: "email do negócio",
      url: "url do negóço",
      status: "status do negoço"
    };

    // Reactive forms
    this.pesquisaForm = this.builder.group({
      id: [],
      descricao: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', Validators.required],
    },{});
  }

  
  findByPesquisa(){
    this.pesquisas = [this.pesquisa, this.pesquisa]
    // Busca todas os resultados
    this.pesquisaService.findByPesquisa(this.pesquisa)
      .subscribe(resultado => resultado);
  }

}
