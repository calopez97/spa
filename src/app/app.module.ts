import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas. 
import { AppRoutingModule } from './app-routing.module';

//Servicios. 
import{HeroesService} from './Services/heroes.service'; 

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ViewheroesComponent } from './components/viewheroes/viewheroes.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ViewheroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
