import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeliveryScreen = () => (
  <View style={styles.container}>
    <Text>Delivery Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeliveryScreen;
