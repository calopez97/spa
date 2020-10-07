import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroeService:HeroesService, private router:Router ) { }

  ngOnInit(): void {
  }


  buscarHeroe(termino:string){
    this.router.navigate(['/view', termino])
  }
}
