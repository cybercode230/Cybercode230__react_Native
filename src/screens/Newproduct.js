import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Category from "../Components/Category";
import { ScrollView } from "react-native";
import { NewproductStyles } from "../Styles/NewPorductStyles";
import Promo from "../Components/Promo";
import Footer from "../Components/Footer";

const NewProduct = () => (
  <View>
    <ScrollView>
      <View style={NewproductStyles.container}>
        <View style={NewproductStyles.toWrapper}>
          <Text style={NewproductStyles.ProText}>Most Trending ones</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Category />
            <Category />
          </ScrollView>
          {/* other */}
          <Text style={NewproductStyles.ProText}>New product Arival</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Promo />
          </ScrollView>
        </View>
      </View>

      <Footer />
    </ScrollView>
  </View>
);

export default NewProduct;
