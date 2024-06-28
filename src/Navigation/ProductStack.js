import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import CartScreen from "../screens/CartScreen";
import Newproduct from '../screens/Newproduct'

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        name="Notification"
        component={Newproduct}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;

