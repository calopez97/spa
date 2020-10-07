import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/Services/heroes.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-viewheroes',
  templateUrl: './viewheroes.component.html'
})
export class ViewheroesComponent implements OnInit {

  termino:string;
  heroes:Heroe[]=[]; 
  
  constructor(private heroeService:HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    this.termino=params['termino'];
    this.heroes=this.heroeService.buscarHeroe(params['termino'])
  })
  }

}
