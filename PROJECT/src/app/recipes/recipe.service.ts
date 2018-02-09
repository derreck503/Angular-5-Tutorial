import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {


    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
    [
        new Ingredient('Salmon', 1),
        new Ingredient('Lemon Slices', 6),
        new Ingredient('Spinach', 3)
    ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg', 
        [
            new Ingredient('Bread', 1),
            new Ingredient('Salomy', 2),
            new Ingredient('Lettuce', 4),
            new Ingredient('Cheese', 4),
        ]),
        new Recipe('And Another Test Recipe', 'This is simply a test', 'http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=jJwvdRJB', 
        [
            new Ingredient('Chicken Drumstick', 3),
            new Ingredient('Chicken Finger', 3)
        ])
    ];

    getRecipe(id: number) {
        return this.recipes[id];
    }   

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}