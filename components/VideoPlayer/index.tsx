import { Video } from "expo-av";
import { Playback } from "expo-av/build/AV";
import React, { useEffect, useRef, useState } from "react";
import { Episode } from "../../types";
import styles from "./style";

interface VideoPlayerProps {
  episode: Episode;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const { episode } = props;
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  //   const handleVideoRef = (component: Playback) => {
  //     const playbackObject = component;
  //     console.log(playbackObject);

  //     const source = {
  //       uri: episode.video,
  //     };
  //     const initialStatus = {};
  //     playbackObject.loadAsync(source, initialStatus, false);
  //   };

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, []);
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: episode.video,
      }}
      posterStyle={{
        resizeMode: "cover",
      }}
      useNativeControls
      // posterSource={{ uri: episode.poster }}
      resizeMode="contain"
      usePoster={true}
      shouldPlay={true}
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}
