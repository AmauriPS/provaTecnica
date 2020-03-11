import { Component, OnInit } from '@angular/core';
import { Pesquisa } from '../pesquisa';
import { PesquisaService } from '../pesquisa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pesquisa-list',
  templateUrl: './pesquisa-list.component.html',
  styleUrls: ['./pesquisa-list.component.css']
})
export class PesquisaListComponent implements OnInit {

  // Declarações de variáveis
  pesquisa: Pesquisa;
  pesquisas: Pesquisa[];
  pesquisaForm: FormGroup;
  
  constructor(private pesquisaService: PesquisaService,
    private builder: FormBuilder) { }

  ngOnInit() {

    this.pesquisas = [];
    this.pesquisa = new Pesquisa;

    // Reactive forms
    this.iniciarFormulario()
  }

  findByPesquisa(){
    // Busca todas os resultados
    this.pesquisaService.findByPesquisa(this.pesquisaForm.value)
      .subscribe(resultado => this.pesquisas = resultado);
  }

  limpar(){
    this.iniciarFormulario()
    this.pesquisas = []
  }

  iniciarFormulario(){
    this.pesquisaForm = this.builder.group({
      id: [],
      descricao: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', Validators.required],
    },{});
  }

}
