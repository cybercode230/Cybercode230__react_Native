  import * as React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import Icon from "react-native-vector-icons/Feather";
  import ProductStack from "./src/Navigation/ProductStack";
  import DeliveryScreen from "./src/screens/DeliveryScreen";
  import AccountScreen from "./src/screens/AccountScreen";
  import Newproduct from "./src/screens/Newproduct";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Delivery") {
              iconName = "truck";
            } else if (route.name === "Account") {
              iconName = "user";
            } else if (route.name === "NewProduct") {
              iconName = "plus-circle";
            } else if (route.name === "Notification") {
              iconName = "bell";
            }
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={ProductStack}
        />
        <Tab.Screen
          name="Delivery"
          component={DeliveryScreen}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
        />
        <Tab.Screen
          name="NewProduct"
          component={Newproduct}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

  export default App;
