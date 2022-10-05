import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    // padding: 2,
    top: 15
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
