import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { AboutComponent } from './componentes/about/about.component';
import { MiFavoritoComponent } from './componentes/mi-favorito/mi-favorito.component';
import { TrailerComponent } from './componentes/trailer/trailer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PeliculasComponent,
    AboutComponent,
    MiFavoritoComponent,
    TrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
