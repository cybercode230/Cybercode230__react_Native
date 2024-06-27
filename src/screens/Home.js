import React from "react";
import { ScrollView, View } from "react-native";
import UserSection from "../Components/UserSection";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import Promo from "../Components/Promo";

const Home = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <UserSection />
        <Category />
        <Featured
          title="Featured"
          description="Enjoy these crazy, juicy, and last discounts."
        />
        <Promo description="Enjoy these crazy, juicy, and last discounts." />
      </ScrollView>
    </View>
  );
};

export default Home;


// import React, { useEffect, useState } from "react";
// import { ScrollView, View } from "react-native";
// import UserSection from "../Components/UserSection";
// import Category from "../Components/Category";
// import Featured from "../Components/Featured";
// import Promo from "../Components/Promo";
// import Spinner from "../Components/Spinner"; // Adjust the path as per your project structure

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay (e.g., fetching data) before hiding the spinner
//     setTimeout(() => {
//       setIsLoading(false); // Set loading to false after 1 minute
//     }, 5000); // 5 seconds
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <UserSection />
//           <Category />
//           <Featured
//             title="Featured"
//             description="Enjoy these crazy, juicy, and last discounts."
//           />
//           <Promo description="Enjoy these crazy, juicy, and last discounts." />
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// export default Home;

