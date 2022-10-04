import { Image, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";

// alterado prop de "RootTabScreenProps" com home dentro
export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg",
        }}
      ></Image>
    </View>
  );
}

// export default HomeScreen;
