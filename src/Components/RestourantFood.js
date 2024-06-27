import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { restaurantStyles } from "../Styles/restaurant";
import Dot from 'react-native-vector-icons/Entypo'
import LocationPin from 'react-native-vector-icons/Entypo'

const restaurantsItems = [
  {
    image: require("../Img/1.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/2.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/3.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/2.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/3.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/1.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/2.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/1.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
  {
    image: require("../Img/2.png"),
    title: "Pizza kings",
    rating: 5,
    prince: 12000,
    genre: "Pizza",
    Address: "kagugu",
    description:
      "Savor the classic flavours of pepperoni, mushroom, sausage, bell pepper ",
  },
];

const RestourantFood = () => {
  return (
    <View style={restaurantStyles.container}>
      {restaurantsItems.map((r, index) => (
        <TouchableOpacity
          key={index}
          style={restaurantStyles.rcard}>
          <View style={restaurantStyles.cardWrapper}>
            <Image
              source={r.image}
              style={restaurantStyles.dishPic}
            />
            <View style={restaurantStyles.textAre}>
              <View>
                <Text style={restaurantStyles.brand}>{r.title}</Text>
              </View>

              <View style={restaurantStyles.rate}>
                <Text style={restaurantStyles.genre}>
                  <Text>{r.rating}</Text>
                  <Dot name="dot-single" />
                  {r.genre}
                </Text>
                <Text style={restaurantStyles.price}>Frw: {r.prince}</Text>
              </View>
              <View style={restaurantStyles.location}>
                <LocationPin
                  name="location-pin"
                  style={restaurantStyles.pin}
                />
                <Text style={restaurantStyles.leftText}>
                  Nearby
                  <Dot name="dot-single" />
                  {r.Address}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RestourantFood;


