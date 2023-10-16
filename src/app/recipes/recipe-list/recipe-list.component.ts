import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test recipe',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.taste.com.au%2FNltXC_f3%2Fw1200-h630-cfill%2Ftaste%2F2022%2F09%2Fall-in-one-tuscan-chicken-pasta-bake-181120-2.jpg&tbnid=SD3NpH4xsa9LBM&vet=12ahUKEwjB5fOcgvqBAxVscWwGHXe3CXwQMygTegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.taste.com.au%2Frecipes%2Fcollections%2Fpasta-recipes&docid=c0-fvJK0WqQl4M&w=1200&h=630&q=pasta%20image&safe=active&ved=2ahUKEwjB5fOcgvqBAxVscWwGHXe3CXwQMygTegUIARCeAQ',
    ),
    new Recipe(
      'A test recipe',
      'this is simply a test recipe',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.taste.com.au%2FNltXC_f3%2Fw1200-h630-cfill%2Ftaste%2F2022%2F09%2Fall-in-one-tuscan-chicken-pasta-bake-181120-2.jpg&tbnid=SD3NpH4xsa9LBM&vet=12ahUKEwjB5fOcgvqBAxVscWwGHXe3CXwQMygTegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.taste.com.au%2Frecipes%2Fcollections%2Fpasta-recipes&docid=c0-fvJK0WqQl4M&w=1200&h=630&q=pasta%20image&safe=active&ved=2ahUKEwjB5fOcgvqBAxVscWwGHXe3CXwQMygTegUIARCeAQ',
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
