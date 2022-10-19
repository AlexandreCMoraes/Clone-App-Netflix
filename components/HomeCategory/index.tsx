import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import styles from "./styles";

// tipo da propriedade que vai receber e renderizar

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
  const navigation = useNavigation();
  const onMoviePress = (movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
    console.warn(movie.id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            ></Image>
          </Pressable>
        )}
        horizontal
      />
    </View>
  );
}
