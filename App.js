import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/routes/MyNavigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./src/store/reducers/mealsReducer";
import { Provider } from "react-redux"

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
}
