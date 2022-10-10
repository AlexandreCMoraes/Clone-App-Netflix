import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // imagem do filme
  image: {
    top: 60,
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  // informações do filme
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  match: {
    color: "#1B5128",
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
  // botoes e textos de play e download (play)
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  // botoes e textos de play e download (donwload)
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
