import { Component, OnInit } from '@angular/core';
import { Pesquisa } from '../pesquisa-list/pesquisa';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PesquisaService } from '../pesquisa-list/pesquisa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-pesquisa-form',
  templateUrl: './pesquisa-form.component.html',
  styleUrls: ['./pesquisa-form.component.css']
})
export class PesquisaFormComponent implements OnInit {

  // Declarações de variáveis
  pesquisa: Pesquisa;
  //garagens: Garagem[];
  pesquisaForm: FormGroup;
  titulo: string;

  constructor(private pesquisaService: PesquisaService,
              //private garagemService: GaragemService,
              // private alert:Alert,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder) { }

  ngOnInit() {

    // Instancia uma nova instituição
    this.pesquisa = new Pesquisa();

    // Obtem ID da instituição pela URL
    this.pesquisa.id = this.route.snapshot.params['id'];

    // Define título da página
    this.titulo = (this.pesquisa.id) ? 'Editar':'Cadastrar';

    // Reactive forms
    this.pesquisaForm = this.builder.group({
      id: [],
      descricao: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', Validators.required],
    },{});

    // Busca o carro caso seja o formulário de editar ou visualizar
    if(this.pesquisa.id){
      this.pesquisaService.findById(this.pesquisa.id)
        .subscribe(carro => this.pesquisaForm.patchValue(carro));
    }

    // Verifica se o formulário seja visualizar
    if(this.route.snapshot.url[0].path =='visualizar'){

      // Desabilita o formulário
      this.pesquisaForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }

    // Busca lista de garagens
    //this.garagemService.findAll()
     // .subscribe(garagens => this.garagens = garagens);

  }

  // Marca a opção selecionada no select
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  // Método para salvar instituição
  onSave(pesquisa: Pesquisa) {

    // Verifica se o formulário esta inválido
    if(this.pesquisaForm.invalid){

      // Valida todos os campos do formulário
      // Validation.allFormFields(this.pesquisaForm);

      // Alerta com a mensagem de erro
      // this.alertService.error("Por favor, preencha os campos obrigatórios!");

    } else { // Se o formulário estiver válido

      // Salva os dados na API
      this.pesquisaService.save(pesquisa)
        .subscribe(pesquisa => {

          // Alerta com a mensagem de sucesso
          // this.alertService.success("dados campo pesquisar salva com sucesso!");

          // Redireciona para lista de instituições
          this.router.navigate(['/pesquisa']);
        });
    }
  }
  
 
    
   }

  

