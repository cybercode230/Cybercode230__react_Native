import { StyleSheet } from "react-native";




export const PromoStyle = StyleSheet.create({
  promoWrapper: {
    height: 80,
    width: 160,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
        gap: 25,
    marginBottom:10,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 30,
    marginHorizontal: 10,
  },
  desc: {
    marginHorizontal: 10,
    color: "#808080",
  },
  text: {
    color: "#fff",
  },
  text1: {
    color: "#f07e4e",
    fontWeight: "bold",
    paddingTop: 5,
    fontSize: 15,
  },
    Pic: {
        position: 'absolute',
        height: 95,
        width:95,
        right: -35,
        bottom:-12
  }
});