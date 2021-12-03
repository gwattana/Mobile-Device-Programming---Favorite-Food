import { CATEGORIES, MEALS } from "../../data/dummy-data";
import {TOGGLE_FAVORITE} from "../actions/mealsAction"
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if(state.favoriteMeals.findIndex((meal)=>meal === action.mealId) === -1){
          state.favoriteMeals.push(action.mealId);
      }else{
          state.favoriteMeals.splice(state.favoriteMeals.indexOf(action.mealId), 1)
      }
      return {...state}
    default:
      return state;
  }
};

export default mealReducer;
