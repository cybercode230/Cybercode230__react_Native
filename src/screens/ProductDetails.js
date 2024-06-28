import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput } from "react-native";

const ProductDetails = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShipIt = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text>Product Details Screen</Text>
      <Button
        title="Add to Cart"
        onPress={() => navigation.navigate("Cart")}
      />
      <Button
        title="Ship It"
        onPress={handleShipIt}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text>Enter Your Details</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
          />
          <TextInput
            placeholder="Payment Info"
            style={styles.input}
          />
          <Button
            title="Submit"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ProductDetails;
