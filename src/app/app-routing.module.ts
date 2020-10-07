import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ViewheroesComponent } from './components/viewheroes/viewheroes.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Heroes', component: HeroesComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path: 'view/:termino', component: ViewheroesComponent}, 
{path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
