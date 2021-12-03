import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const title = props.route.params.title;
  const steps = props.route.params.steps;
  useEffect(() => {
    props.navigation.setOptions({
      title: title,
    });
  });
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ flexDirection: "column", flex: 1, alignItems: "flex-end" }}
        >
          <Text>Dish: </Text>
        </View>
        <View style={{ flexDirection: "column", flex: 5 }}>
          <Text>{title}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ flexDirection: "column", flex: 1, alignItems: "flex-end" }}
        >
          <Text>Steps: </Text>
        </View>
        <View style={{ flexDirection: "column", flex: 5 }}>
          {steps.map((step, index) => {
            return <Text key={index} style={{marginBottom:5}}>{`${index + 1}.${step}`}</Text>;
          })}
        </View>
      </View>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.navigate("CategoriesScreen")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
