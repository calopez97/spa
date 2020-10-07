import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../Services/heroes.service'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]; 

  constructor( private router:Router, 
    private HeroesService:HeroesService) {

   }

  ngOnInit(): void {

    this.heroes=this.HeroesService.getHeroes(); 
  }

  moveOn(idx){
    this.router.navigate(['/heroe',idx]); 
  }

}
