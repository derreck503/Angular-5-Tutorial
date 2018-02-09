import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients:Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        ///... is the spread operator to pass all array objects at once, instead of the whole array itself
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}