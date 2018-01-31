import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg'),
        new Recipe('And Another Test Recipe', 'This is simply a test', 'http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1502824044/royal-farms-best-gas-station-food-FT-SS0817.jpg?itok=jJwvdRJB')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}