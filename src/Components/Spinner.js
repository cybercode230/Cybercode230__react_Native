import React from "react";
import { View, ActivityIndicator } from "react-native";
import { SpinnerStyles } from "../Styles/Spinner";

export const Spinner = () => {
    return (
        <View style={SpinnerStyles.container}>
            <ActivityIndicator size={"large"} color="#f07e4e" />
        </View>
    )
}