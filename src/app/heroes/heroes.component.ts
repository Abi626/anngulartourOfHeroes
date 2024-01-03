import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule,RouterLink } from '@angular/router';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor,HeroDetailComponent,RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name:'Windstorm'
  // }
  
  //heroes = HEROES;
  heroes:Hero[]=[];
  //selectedHero?:Hero;

  constructor(private heroService: HeroService,private messageService:MessageService){}

  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  //   //this.messageService.add('Heroes Component: Selected hero id : ${hero.id}');
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  
  getHeroes():void{
    this.heroService.getHeroes()
            .subscribe(heroes=>this.heroes=heroes);
  }

}
