import { StyleSheet } from "react-native";

export const restaurantStyles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  rcard: {
    marginBottom: 10,
    marginRight: 8,
    width:320,
  },
  cardWrapper: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
  dishPic: {
    // width: "100%",
    width: 298,
    padding: 10,
    height: 196,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textAre: {
    padding: 3,
    marginVertical: 1,
    marginLeft: 3,
  },
  brand: {
    fontWeight: "700",
  },
  price: {
    marginRight: 6,
    color: '#000',
    fontWeight:'700' 
  },
  rate: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  genre: {
    color: "#f07e4e",
    fontSize:12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  leftText: {
    fontSize: 9,
    marginBottom: 4,
    color:'#808080'
  }
});
