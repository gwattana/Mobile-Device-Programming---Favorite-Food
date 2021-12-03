import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealList = (props) => {
  let listData = props.listData;
  let type = props.type
  props = props.props;
  const renderMealItem = (itemData) => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={() => type === "favorite" ? props.navigation.navigate("MealDetailScreen2",{title:itemData.item.title, steps:itemData.item.steps, id:itemData.item.id}) :props.navigation.navigate("MealDetailScreen",{title:itemData.item.title, steps:itemData.item.steps,id:itemData.item.id})}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: itemData.item.imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {itemData.item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text>{itemData.item.duration}</Text>
              <Text>{itemData.item.complexity.toUpperCase()}</Text>
              <Text>{itemData.item.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },

  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default MealList;
