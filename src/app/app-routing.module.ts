import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './componentes/principal/principal.component'
import {PeliculasComponent} from './componentes/peliculas/peliculas.component'
import {AboutComponent} from './componentes/about/about.component'

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full'
},{
  path: 'peliculas',
  component: PeliculasComponent,

},{
  path:'about',
  component: AboutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
