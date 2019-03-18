import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Conteiners/home/home.component';
import { ContatosComponent } from './Conteiners/contatos/contatos.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { ButtonNavComponent } from './Componentes/button-nav/button-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatosComponent,
    NavComponent,
    ButtonNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
