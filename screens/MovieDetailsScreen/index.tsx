import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";

const firstSeason = movie.seasons.items[0];
// const firstEpisode = movie.seasons.items[0].episodes.items[0];

export default function MovieDetailsScreen() {
  return (
    <View>
      {/* poster do filme com as informações logo abaixo */}
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={{ padding: 15, top: 60, backgroundColor: "#111313" }}>
        
        {/* renderizando episodios */}
        {/* <EpisodeItem episode={firstEpisode} /> */}
        
        {/* info do filme */}
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

        {/* botao de play */}
        <Pressable
          onPress={() => {
            console.warn("Play");
          }}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>
            <Entypo name="controller-play" size={18} color="black" />
            Play
          </Text>
        </Pressable>

        {/* botao de Download */}
        <Pressable
          onPress={() => {
            console.warn("Download");
          }}
          style={styles.downloadButton}
        >
          <Text style={styles.downloadButtonText}>
            <AntDesign name="download" size={18} color="white" /> Download
          </Text>
        </Pressable>
        {/* resumo do filmes e mais info */}
        <Text style={{ marginVertical: 10, color: "white" }}>{movie.plot}</Text>
        <Text style={styles.year}>Cast: {movie.cast}</Text>
        <Text style={styles.year}>Creator: {movie.creator}</Text>

        {/* botoes de opções de add, like, share */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {/* botao de add */}
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <AntDesign name="plus" size={26} color="white" />
            <Text style={{ color: "#b5bab6", marginTop: 5 }}>My List</Text>
          </View>
          {/* botao de like */}
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <AntDesign name="like2" size={26} color="white" />
            <Text style={{ color: "#b5bab6", marginTop: 5 }}>Rate</Text>
          </View>
          {/* botao de share */}
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Ionicons name="paper-plane-outline" size={26} color="white" />
            <Text style={{ color: "#b5bab6", marginTop: 5 }}>Share</Text>
          </View>
        </View>
      </View>
      
      <FlatList 
      data={movie.seasons}/>
    </View>
  );
}
