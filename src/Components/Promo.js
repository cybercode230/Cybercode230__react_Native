// import React from "react";
// import { View, Text, ScrollView, Image } from "react-native";
// import { PromoStyle } from "../Styles/Promo";

// const Promo = (props) => {

//   const promoItems = [
//     {
//       image: require("../Img/1x.png"),
//       copy: "Snack time \n made better",
//       discount: "~20~",
//       backgroundColor: "black",
//     },
//     {
//       image: require("../Img/3x.png"),
//       copy: "Snack time \n made better",
//       discount: "~20~",
//       backgroundColor: "#f07e4e",
//     },
//     {
//       image: require("../Img/2x.png"),
//       copy: "Snack time \n made better",
//       discount: "~20~",
//       backgroundColor: "#396858",
//     },
//     {
//       image: require("../Img/3x.png"),
//       copy: "Snack time \n made better",
//       discount: "~20~",
//       backgroundColor: "#f07e4e",
//     },
//   ];
//   return (
//     <View>
//       <Text style={PromoStyle.promoTitle}>Promotion</Text>
//       <Text style={PromoStyle.desc}>{props.description}</Text>

//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}>
//         {promoItems.map((e, index) => (
//           <View
//             style={[
//               PromoStyle.promoWrapper,
//               { backgroundColor: e.backgroundColor },
//             ]}>
//             <View key={index}>
//               <Text style={PromoStyle.text}>{e.copy}</Text>
//               <Text style={PromoStyle.text1}>{e.discount}</Text>
//             </View>
//             {/* image */}
//             <Image
//               source={e.image}
//               style={PromoStyle.Pic}
//             />
//           </View>
//         ))}
//       </ScrollView>

//       <Text style={PromoStyle.promoTitle}>Popular Trends</Text>
//       <Text style={PromoStyle.desc}>{props.description}</Text>

//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}>
//         {promoItems.map((e, index) => (
//           <View
//             style={[
//               PromoStyle.promoWrapper,
//               { backgroundColor: e.backgroundColor },
//             ]}>
//             <View key={index}>
//               <Text style={PromoStyle.text}>{e.copy}</Text>
//               <Text style={PromoStyle.text1}>{e.discount}</Text>
//             </View>
//             {/* image */}
//             <Image
//               source={e.image}
//               style={PromoStyle.Pic}
//             />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default Promo;

import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { PromoStyle } from "../Styles/Promo";

const Promo = (props) => {
  const promoItems = [
    {
      id: 1,
      image: require("../Img/1x.png"),
      copy: "Snack time \n made better",
      discount: "~20~",
      backgroundColor: "black",
    },
    {
      id: 2,
      image: require("../Img/3x.png"),
      copy: "Snack time \n made better",
      discount: "~20~",
      backgroundColor: "#f07e4e",
    },
    {
      id: 3,
      image: require("../Img/2x.png"),
      copy: "Snack time \n made better",
      discount: "~20~",
      backgroundColor: "#396858",
    },
    {
      id: 4,
      image: require("../Img/3x.png"),
      copy: "Snack time \n made better",
      discount: "~20~",
      backgroundColor: "#f07e4e",
    },
  ];

  return (
    <View>
      <Text style={PromoStyle.promoTitle}>Promotion</Text>
      <Text style={PromoStyle.desc}>{props.description}</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {promoItems.map((e) => (
          <View
            key={e.id} // Apply key prop here
            style={[
              PromoStyle.promoWrapper,
              { backgroundColor: e.backgroundColor },
            ]}>
            <View>
              <Text style={PromoStyle.text}>{e.copy}</Text>
              <Text style={PromoStyle.text1}>{e.discount}</Text>
            </View>
            <Image
              source={e.image}
              style={PromoStyle.Pic}
            />
          </View>
        ))}
      </ScrollView>

      <Text style={PromoStyle.promoTitle}>Popular Trends</Text>
      <Text style={PromoStyle.desc}>{props.description}</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {promoItems.map((e) => (
          <View
            key={e.id} // Apply key prop here
            style={[
              PromoStyle.promoWrapper,
              { backgroundColor: e.backgroundColor },
            ]}>
            <View>
              <Text style={PromoStyle.text}>{e.copy}</Text>
              <Text style={PromoStyle.text1}>{e.discount}</Text>
            </View>
            <Image
              source={e.image}
              style={PromoStyle.Pic}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Promo;

