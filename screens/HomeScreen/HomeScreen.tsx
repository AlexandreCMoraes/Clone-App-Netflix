import { FlatList, Image, Text } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";
import categories from "../../assets/data/categories";

const firstCategory = categories.items[0];

// alterado prop de "RootTabScreenProps" com home dentro
export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular on Netflix</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          ></Image>
        )}
        horizontal
      />
    </View>
  );
}
