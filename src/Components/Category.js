import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categoryStyles } from "../Styles/Category";

const items = [
  {
    image: require("../Img/1.png"),
    title: "Meals",
  },
  {
    image: require("../Img/2.png"),
    title: "Dessert",
  },
  {
    image: require("../Img/1.png"),
    title: "Fast Food",
  },
  {
    image: require("../Img/3.png"),
    title: "Fast Food",
  },
  {
    image: require("../Img/2.png"),
    title: "For the best",
  },
  {
    image: require("../Img/1.png"),
    title: "Vegetables",
  },
  {
    image: require("../Img/2.png"),
    title: "Vegetables",
  },
  {
    image: require("../Img/3.png"),
    title: "Vegetables",
  },
];

const Category = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={categoryStyles.Wrapper}>
      {items.map((e, index) => {
        return (
          <View key={index}>
            <TouchableOpacity>
              <Image
                source={e.image}
                style={categoryStyles.topImage}
              />
              <Text style={categoryStyles.itemsText}>{e.title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Category;
