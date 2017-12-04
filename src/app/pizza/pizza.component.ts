import { Component, OnInit } from '@angular/core';
import {Pizza} from './pizza.model';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  private pizza: Pizza;
  private nvPx: number;
  private ancienPx : number;

  // private Jambon : boolean;
  // private Magret : boolean;
  // private Miel : boolean;
  // private Anchois : boolean;
  // private Champignons : boolean;

  entries = [
    {
        id: 1,
        description: 'entry 1'
    },
    {
        id: 2,
        description: 'entry 2'
    },
  ];
  selectedEntry;

  onSelectionChange(entry) {
      this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
      this.pizza.prix += 1;
  }
  
  constructor() { 
    this.pizza = new Pizza();
  }

  ngOnInit() {
    this.pizza.base['Creme'] = 3;
    this.pizza.base['Tomate'] = 2;
    this.ancienPx = this.pizza.prix;
    this.pizza.ingredients['Jambon'] = 2;
    this.pizza.ingredients['Magret'] = 4;
    this.pizza.ingredients['Miel'] = 1;
    this.pizza.ingredients['Anchois'] = 3;
    this.pizza.ingredients['Champignon'] = 1;
    this.pizza.ingredientCoche['Jambon'] = false;
    this.pizza.ingredientCoche['Magret'] = false;
    this.pizza.ingredientCoche['Miel'] = false;
    this.pizza.ingredientCoche['Anchois'] = false;
    this.pizza.ingredientCoche['Champignon'] = false;
    /* this.Jambon = false;
    this.Magret = false;
    this.Miel = false;
    this.Anchois = false;
    this.Champignons = false; */
    
  }

  onBaseChange(value) {
    this.nvPx = Object.assign({}, this.nvPx, value);
      this.pizza.prix = this.ancienPx + value;  
    
  }
  onIngredientChange(ingredientOui : boolean, value : number) {

    this.nvPx = Object.assign({}, this.nvPx, value);
      if(ingredientOui){
        this.pizza.prix += value;
      }else {
        this.pizza.prix -= value;
      }  
  }
  

}


