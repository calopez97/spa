import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../Services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any=[];


  constructor( private activedRoute: ActivatedRoute, private heroeService:HeroesService) { 
    this.activedRoute.params.subscribe( params =>{
      this.heroe=this.heroeService.getHeroe( params['id']); 
    } )
  }

  ngOnInit(): void {
  }

}
