import React, { Component } from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HeaderButton from "../headers/CustomHeaderButton"
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import {toggleFavorite} from '../store/actions/mealsAction'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function Drawerz() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerHideStatusBarOnOpen={true}
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: null,
        }}
      >
        <Drawer.Screen
          name="MealsFev"
          component={BottomTabs}
          options={{
            drawerLabel: "MealsFev",
            // drawerIcon: ({ color }) => {
            //   return <AntDesign name="tags" size={24} color={color} />;
            // },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Flter"
          component={FiltersScreen}
          options={{
            drawerLabel: "Filter",
            // drawerIcon: ({ color }) => {
            //   return <AntDesign name="tags" size={24} color={color} />;
            // },
            headerLeft: null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function MyStack() {
  const dispatch = useDispatch() 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={
          ({route})=>({
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item title="Tab_1" iconName="ios-star-outline" onPress={() => {    dispatch(toggleFavorite(route.params.id));}} />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Favorite() {
  const dispatch = useDispatch() 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoritesScreen}
        options={{
          title: "My Favorite",
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MealDetailScreen2"
        component={MealDetailScreen}
        options={
          ({route})=>({
          headerStyle: {
            backgroundColor: "#8c1aff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item title="Tab_1" iconName="ios-star-outline" onPress={() => {    dispatch(toggleFavorite(route.params.id));}} />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Meals"
        component={MyStack}
        options={{
          tabBarIcon: "food",
          tabBarColor: "#694fad",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: "star-outline",
          tabBarColor: "#3B52B4",
        }}
      />
    </Tab.Navigator>
  );
}
