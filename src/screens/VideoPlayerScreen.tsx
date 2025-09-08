
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Svg, { Path } from 'react-native-svg';
import useVideoPlayerScreenController from './VideoPlayerScreenController';
import { CommonColor } from '../constents/CommonColor';

const VideoPlayerScreen = () => {

  const {
    videoRef,
    currentTime,
    comments,
    newComment,
    drawingPaths,
    currentPath,
    color,
    isDrawing,
    setCurrentTime,
    setNewComment,
    setColor,
    setIsDrawing,
    handleAddComment,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useVideoPlayerScreenController();

  return (
    <View style={styles.container}>
      <View
        style={styles.videoWrapper}
        onStartShouldSetResponder={() => true}
        onResponderStart={handleTouchStart}
        onResponderMove={handleTouchMove}
        onResponderRelease={handleTouchEnd}
      >
        <Video
          ref={videoRef}
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          style={styles.video}
          resizeMode="contain"
          onProgress={({ currentTime }) => setCurrentTime(currentTime)}
          paused={false}
        />
        <Svg style={StyleSheet.absoluteFill}>
          {drawingPaths.map((p, idx) => (
            <Path key={idx} d={p.d} stroke={p.color} strokeWidth={3} fill="none" />
          ))}
          {currentPath ? (
            <Path d={currentPath} stroke={color} strokeWidth={3} fill="none" />
          ) : null}
        </Svg>
      </View>

      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              videoRef.current.seek(item.time);
            }}
          >
            <Text style={styles.comment}>
              [{formatTime(item.time)}] {item.text}
            </Text>
          </TouchableOpacity>
        )}
        style={{ flex: 1, width: '100%' }}
      />

      <View style={styles.commentInput}>
        <Text>{formatTime(currentTime)}</Text>
        <TextInput
          placeholder="Write your comment..."
          style={styles.input}
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.commentBtn}>
          <Text style={{ color: '#fff' }}>Comment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tools}>
        <TouchableOpacity onPress={() => setIsDrawing(!isDrawing)} style={styles.toolBtn}>
          <Text>{isDrawing ? 'Stop Drawing' : 'Draw'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColor(CommonColor.red)} style={[styles.colorBox, { backgroundColor: CommonColor.red }]} />
        <TouchableOpacity onPress={() => setColor(CommonColor.lightGreen)} style={[styles.colorBox, { backgroundColor: CommonColor.lightGreen }]} />
        <TouchableOpacity onPress={() => setColor(CommonColor.blue)} style={[styles.colorBox, { backgroundColor: CommonColor.blue }]} />
      </View>
    </View>
  );
};

const formatTime = (sec: any) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' + s : s}`;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CommonColor.white, padding: 10 },
  videoWrapper: { height: 250, backgroundColor: CommonColor.black },
  video: { ...StyleSheet.absoluteFillObject },
  comment: { padding: 5, borderBottomWidth: 1, borderColor: CommonColor.offWhite },
  commentInput: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', marginHorizontal: 5, padding: 5 },
  commentBtn: { backgroundColor: CommonColor.skyBlue, padding: 10, borderRadius: 5 },
  tools: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  toolBtn: { padding: 10, backgroundColor: '#eee', borderRadius: 5 },
  colorBox: { width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 },
});

export default VideoPlayerScreen;
