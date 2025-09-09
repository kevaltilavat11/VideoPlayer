
import React from 'react';
import {View,StyleSheet} from 'react-native';
import useVideoPlayerScreenController from './VideoPlayerScreenController';
import { CommonColor } from '../constants/CommonColor';
import CustomVideo from '../components/CustomVideo';
import CommentsSection from '../components/CommentSection';

const VideoPlayerScreen = () => {

  const {
    videoRef,
    currentTime,
    comments,
    newComment,
    duration,
    paused,
    muted,
    onSeek,
    onLoad,
    formatTime,
    togglePlayPause,
    toggleMuteUnMute,
    isFullscreen,
    toggleFullscreen,
    setCurrentTime,
    setNewComment,
    handleAddComment,
    handleMenu,
    deleteComment,
    commentDelete
  } = useVideoPlayerScreenController();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <CustomVideo
          videoRef={videoRef}
          currentTime={currentTime}
          duration={duration}
          paused={paused}
          muted={muted}
          setCurrentTime={setCurrentTime}
          setDuration={onLoad}
          togglePlayPause={togglePlayPause}
          fullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
          toggleMuteUnMute={toggleMuteUnMute}
          onSeek={onSeek}
          formatTime={formatTime}
        />
      </View>
      <CommentsSection
        comments={comments}
        videoRef={videoRef}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
        handleMenu={handleMenu}
        deleteComment={deleteComment}
        commentDelete={commentDelete}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CommonColor.white, },
  slider: {
    flex: 1,
    marginHorizontal: 8,
  },
  time: {
    color: '#fff',
    fontSize: 12,
    marginHorizontal: 6,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  videoWrapper: { height: 250, backgroundColor: CommonColor.black },
  videoContainer: { alignItems: 'center', margin: 10 },
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
