import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  value = '';
  // tslint:disable-next-line: ban-types
  foods: Object[] = [
    {
      name: 'Pizza',
      calories: 400,
      image: 'https://i.imgur.com/eTmWoAN.png',
      quantity: 0
    },
    {
      name: 'Salad',
      calories: 150,
      image: 'https://i.imgur.com/DupGBz5.jpg',
      quantity: 0
    },
    {
      name: 'Sweet Potato',
      calories: 120,
      image: 'https://i.imgur.com/hGraGyR.jpg',
      quantity: 0
    },
    {
      name: 'Gnocchi',
      calories: 500,
      image: 'https://i.imgur.com/93ekwW0.jpg',
      quantity: 0
    },
    {
      name: 'Pot Roast',
      calories: 350,
      image: 'https://i.imgur.com/WCzJDWz.jpg',
      quantity: 0
    },
    {
      name: 'Lasagna',
      calories: 750,
      image: 'https://i.imgur.com/ClxOafl.jpg',
      quantity: 0
    },
    {
      name: 'Hamburger',
      calories: 400,
      image: 'https://i.imgur.com/LoG39wK.jpg',
      quantity: 0
    },
    {
      name: 'Pad Thai',
      calories: 475,
      image: 'https://i.imgur.com/5ktcSzF.jpg',
      quantity: 0
    },
    {
      name: 'Almonds',
      calories: 75,
      image: 'https://i.imgur.com/JRp4Ksx.jpg',
      quantity: 0
    },
    {
      name: 'Bacon',
      calories: 175,
      image: 'https://i.imgur.com/7GlqDsG.jpg',
      quantity: 0
    },
    {
      name: 'Hot Dog',
      calories: 275,
      image: 'https://i.imgur.com/QqVHdRu.jpg',
      quantity: 0
    },
    {
      name: 'Chocolate Cake',
      calories: 490,
      image: 'https://i.imgur.com/yrgzA9x.jpg',
      quantity: 0
    },
    {
      name: 'Wheat Bread',
      calories: 175,
      image: 'https://i.imgur.com/TsWzMfM.jpg',
      quantity: 0
    },
    {
      name: 'Orange',
      calories: 85,
      image: 'https://i.imgur.com/abKGOcv.jpg',
      quantity: 0
    },
    {
      name: 'Banana',
      calories: 175,
      image: 'https://i.imgur.com/BMdJhu5.jpg',
      quantity: 0
    },
    {
      name: 'Yogurt',
      calories: 125,
      image: 'https://i.imgur.com/URhdrAm.png',
      quantity: 0
    }
  ];

  mostrar = false;
  units = 1;
  menuDiario: any = [];
  totalCalories = 0;
  foodFilter = '';

  addNewFood(): void {
    this.mostrar ? this.mostrar = false : this.mostrar = true;
  }
  closeForm01(): void{
    this.mostrar ? this.mostrar = false : this.mostrar = true;
  }

  newFood(foodName: any, foodCalories: any): void{
    if (foodName.value.length !== 0 || foodCalories.value.length !== 0){
    const comida = {
      name: foodName.value,
      calories: Number(foodCalories.value),
    };
    this.foods.push(comida);
    this.mostrar = false;
    }
  }

  add(calories: number, foodName: string, units: number): void{
    this.totalCalories += Number(calories);
    let repetido = false;
    for (const menu of this.menuDiario) {
      if (menu.name === foodName) {
        repetido = true;
        menu.units += units;
        break;
      }
    }

    if (!repetido) {
      this.menuDiario.push({name: foodName, calories, units});
    }
}
  constructor() { }
  ngOnInit(): void {}
}
