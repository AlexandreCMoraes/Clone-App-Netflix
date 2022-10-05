import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

import movie from "../../assets/data/movie";
const firstEpisode = movie.seasons.items[0].episodes.items[0];

export default function MovieDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={{ padding: 15, top: 60 }}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12 +</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}
