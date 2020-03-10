import { PipeTransform, Pipe } from '@angular/core';
import { Pesquisa } from './pesquisa';

@Pipe({
    name: 'pesquisaFilter'
  })
  export class pesquisaFilterPipe implements PipeTransform {
  
    transform(pesquisa: Pesquisa[], busca?: string): Pesquisa[] {
  
      if(!pesquisa || !busca){
        return pesquisa;
      }
  
      return pesquisa.filter(pesquisa => 
        pesquisa.sigla.toLocaleLowerCase().indexOf(busca.toLocaleLowerCase()) !== -1);
    }
  }