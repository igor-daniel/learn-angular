import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Conteiners/home/home.component';
import { ContatosComponent } from './Conteiners/contatos/contatos.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "contatos", component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
