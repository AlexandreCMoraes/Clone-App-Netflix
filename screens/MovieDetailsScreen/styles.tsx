import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    top: 60,
    width: "100%",
    // height: 100,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  match: {
    color: "#",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    color: "black",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;
