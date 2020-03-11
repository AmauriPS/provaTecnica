import { Component, OnInit } from '@angular/core';
import { Pesquisa } from '../pesquisa';
import { PesquisaService } from '../pesquisa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pesquisa-form',
  templateUrl: './pesquisa-form.component.html',
  styleUrls: ['./pesquisa-form.component.css']
})
export class PesquisaFormComponent implements OnInit {

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

  iniciarFormulario(){
    this.pesquisaForm = this.builder.group({
      id: [],
      descricao: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required],
      status: ['ativado', Validators.required],
    },{});
  }

  salvar(pesquisa: Pesquisa){
    console.log(pesquisa);
    this.pesquisaService.salvar(pesquisa)
        .subscribe(response => response)

  }

}
