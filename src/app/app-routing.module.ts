import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './componentes/principal/principal.component'
import {PeliculasComponent} from './componentes/peliculas/peliculas.component'
import {AboutComponent} from './componentes/about/about.component'
import {MiFavoritoComponent} from './componentes/mi-favorito/mi-favorito.component'
import {TrailerComponent} from './componentes/trailer/trailer.component'

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
},{
  path: 'mifavorita',
  component: MiFavoritoComponent
},{
  path: 'mifavorita/trailer',
  component: TrailerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
