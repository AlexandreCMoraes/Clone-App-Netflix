import { FlatList, Image, Text, View } from "react-native";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    //TODO entender melhor
    movies: { id: string; poster: string }[];
  };
}

// sera renderizado em homsecreen recebendo a lista de categorias
export default function HomeCategory(props: HomeCategoryProps) {
  const { category } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
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
