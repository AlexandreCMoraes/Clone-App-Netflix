import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Episode } from "../../types";
// import { Text, View } from "../../components/Themed";

import styles from "./styles";

// tipo da propriedade que vai receber e renderizar
interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => {};
}

export default function EpisodeItem(props: EpisodeItemProps) {
  // desestruturando episode
  const { episode, onPress } = props;
  return (
    // TODO verificar distancia
    <Pressable
      style={{ marginHorizontal: 10 }}
      onPress={() => onPress(episode)}
    >
      {/* imagem de do episodio, titulo, duração, botoes... */}
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color={"white"} />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
}
