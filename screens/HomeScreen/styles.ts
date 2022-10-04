import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor: "grey",
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
