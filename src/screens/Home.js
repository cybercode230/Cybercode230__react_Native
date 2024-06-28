import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import UserSection from "../Components/UserSection";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import Promo from "../Components/Promo";
import Spinner from "../Components/Spinner";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <UserSection />
          <Category />
          <Featured
            title="Featured"
            description="Enjoy these crazy, juicy, and last discounts."
          />
          <Promo description="Enjoy these crazy, juicy, and last discounts." />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
