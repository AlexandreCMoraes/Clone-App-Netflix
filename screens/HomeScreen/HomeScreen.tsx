import { FlatList } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";

// alterado prop de "RootTabScreenProps" com home dentro
export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      {/* lista da categorias de filmes */}
      {/* <HomeCategory category={firstCategory} /> */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}
