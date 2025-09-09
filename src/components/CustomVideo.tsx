import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import {PlayIcon} from '../assets/svg/PlayIcon';
import {PauseIcon} from '../assets/svg/PauseIcon';
import {MuteIcon} from '../assets/svg/MuteIcon';
import {UnmuteIcon} from '../assets/svg/UnmuteIcon';
import {LocationPin} from '../assets/svg/LocationPin';
import {FullscreenIcon} from '../assets/svg/FullscreenIcon';

type CustomVideoProps = {
    videoRef: any;
    currentTime: number;
    duration: number;
    paused: boolean;
    muted: boolean;
    fullscreen: boolean;
    toggleFullscreen: () => void;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
    togglePlayPause: () => void;
    toggleMuteUnMute: () => void;
    onSeek: (value: number) => void;
    formatTime: (seconds: number) => string;    
}; 
const CustomVideo = (props:CustomVideoProps) => {
    const {
        videoRef,
        currentTime,
        duration,
        paused,
        muted,
        fullscreen,
        setCurrentTime,
        setDuration,
        togglePlayPause,
        toggleMuteUnMute,
        toggleFullscreen,
        onSeek,
        formatTime,        
    } = props;
  return (
    <View style={styles.videoWrapper}>
      <Video
        ref={videoRef}
        repeat
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        resizeMode="contain"
        paused={paused}
        muted={muted}
        fullscreen={fullscreen}
        onProgress={({ currentTime }) => setCurrentTime(currentTime)}
        onLoad={({ duration }) => setDuration(duration)}
      />
      <View style={styles.controls}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onSlidingComplete={onSeek}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FFFFFF50"
          thumbTintColor="transparent"
        />
        <View style={styles.controlRow}>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={togglePlayPause}>
          {paused ? <PlayIcon size={24} color="#fff" /> : <PauseIcon size={24} color="#fff" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMuteUnMute}>
          {muted ? <MuteIcon size={24} color="#fff" /> : <UnmuteIcon size={24} color="#fff" />}
        </TouchableOpacity>
        </View>

        <Text style={styles.timeText}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Text>
        <View style={styles.iconContainer}>
        <TouchableOpacity>
          <LocationPin size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFullscreen}>
          <FullscreenIcon size={24} color="#fff" />
        </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}
export default CustomVideo;

const styles = StyleSheet.create({
  videoWrapper: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    overflow: 'hidden',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',

  },
  slider: {
    flex: 1,
    width: '110%',
    position: 'absolute',
    bottom:26
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
  },
  controlRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    paddingTop:10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 8,
    paddingBottom: 10,
},
iconContainer:{flexDirection:'row', alignItems:'center', gap:10}
});
