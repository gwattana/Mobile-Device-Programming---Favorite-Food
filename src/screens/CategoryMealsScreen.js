import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.title,
    });
  });
  const availableMeal = useSelector((state) => state.meals.filteredMeals);
  // const renderMealItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       image={itemData.item.imageUrl}
  //       onSelectMeal={() => {
  //         props.navigation.navigate("MealDetailScreen",{title:itemData.item.title, steps:itemData.item.steps})
  //       }}
  //     />
  //   );
  // };

  const catId = props.route.params.categoryId;

  const displayedMeals = availableMeal.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList props={props} listData={displayedMeals}></MealList>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
