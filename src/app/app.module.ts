import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaListComponent } from './pesquisa/pesquisa-list/pesquisa-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PesquisaFormComponent } from './pesquisa/pesquisa-form/pesquisa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaListComponent,
    PesquisaFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
