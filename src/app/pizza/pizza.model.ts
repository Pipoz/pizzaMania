
export class Pizza {
    name: string;
    size: string;
    pate: string[];
    base: Map<string,number>;
    ingredients: Map<string,number>;
    prix: number;
    ingredientCoche : Map<string, boolean>;

    constructor(){
        this.size = "normal";
        this.pate = ["fine", "épaisse"];
        this.base= new Map<string,number>();
        this.ingredients = new Map<string,number>();
        this.prix = 5;
        this.ingredientCoche = new Map<string,boolean>();
    }
  }
  