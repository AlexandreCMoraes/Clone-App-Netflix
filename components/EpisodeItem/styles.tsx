import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 90,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  text: { color: "white" },
  duration: {
    color: "#757575",
    fontSize: 10,
  },
  plot: {
    color: "#757575",
  },
});

export default styles;
