import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { useIsFocused } from '@react-navigation/native'

const FavoritesScreen = (props) => {
  const favMealsId = useSelector((state) => state.meals.favoriteMeals);
  const isFocused = useIsFocused()
    useEffect(() => {
      console.log('value changed!'), [isFocused]
    });
  console.log(favMealsId)
  const favMeals = MEALS.filter((meal) => favMealsId.includes(meal.id));
  return <MealList props={props} listData={favMeals} type={"favorite"}></MealList>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
