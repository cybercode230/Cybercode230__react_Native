import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

const AccountScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < 2) {
      swiperRef.current.scrollBy(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1f4037", "#99f2c8"]}
        style={styles.header}>
        <Text style={styles.headerText}>Account Screen</Text>
      </LinearGradient>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        activeDotColor="#fff"
        index={currentIndex}
        onIndexChanged={(index) => setCurrentIndex(index)}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Street Address"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Postal Code"
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Security</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleNext}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#1f4037",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  formContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#fff",
    backgroundColor: "#333",
  },
  button: {
    backgroundColor: "#1f4037",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AccountScreen;
