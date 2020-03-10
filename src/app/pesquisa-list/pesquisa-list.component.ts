import { Component, OnInit } from '@angular/core';
import { Pesquisa } from './pesquisa';
import { PesquisaService } from './pesquisa.service';
// import { AlertService } from 'src/app/core/alert/alert.service';
 

@Component({
  selector: 'app-pesquisa-list',
  templateUrl: './pesquisa-list.component.html',
  styleUrls: ['./pesquisa-list.component.css']
})
export class PesquisaListComponent implements OnInit {

  // Declarações de variáveis
  pesquisa: Pesquisa[];
  
  constructor(private pesquisaService: PesquisaService) { }
              // private alertService:AlertService

  ngOnInit() {

    // Busca todas as pesquisa
    this.pesquisaService.findAll()
      .subscribe(pesquisa => this.pesquisa = pesquisa);
  }

  // Método para deleta uma pesquisa
  onDelete(id: number){

    // Deleta instituição na API
    this.pesquisaService.deteleById(id)
      .subscribe(() => {

        // Remove a instituição da lista
        this.pesquisa = this.pesquisa
          .filter(pesquisa => pesquisa.id !== id);

        // Alerta com a mensagem de sucesso
        // this.alertService.success("pesquisa excluída com sucesso!");
      },
      (exception) => {
        // Alerta com mensagem de erro
        // this.alertService.error("Desculpe, mas não é possível excluir a pesquisa !");
      });
  }

 
}
