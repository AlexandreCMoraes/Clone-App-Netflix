import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
// import { Text, View } from "../../components/Themed";

import styles from "./styles";

// tipo da propriedade que vai receber e renderizar
interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

export default function EpisodeItem(props: EpisodeItemProps) {
  // desestruturando episode
  const { episode } = props;
  return (
    // TODO verificar distancia
    <View style={{marginHorizontal:10}}>
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
    </View>
  );
}
