import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FeatureStyles } from "../Styles/Features";
import Arrow from 'react-native-vector-icons/Feather';
import RestourantFood from '../Components/RestourantFood';

const Featured = (props) => {
  return (
    <View style={FeatureStyles.container}>
      <View style={FeatureStyles.textWrapper}>
        <Text style={{ fontWeight: "700" }}>{props.title}</Text>
        <Arrow
          name="arrow-right-circle"
          style={FeatureStyles.arrow}
        />
      </View>
      <Text style={FeatureStyles.descText}>{props.description}</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={FeatureStyles.cardScroll}>
        <RestourantFood />
      </ScrollView>
    </View>
  );
};

export default Featured;
