import { useRef, useState } from "react";

const useVideoPlayerScreenController = () => {
  const videoRef = useRef<any>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [comments, setComments] = useState<any>([]);
  const [newComment, setNewComment] = useState('');
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, isSetFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);

const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments((prev: any) => [
      ...prev,
      { id: Date.now().toString(), time: currentTime, text: newComment },
    ].reverse());
    setNewComment('');
  };

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const toggleMuteUnMute = () => {
    setMuted(!muted);
  };
  const toggleFullscreen = () => {
    isSetFullscreen(!isFullscreen);
  };
  const onProgress = (data:any) => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = (data:any) => {
    setDuration(data);
  };

  const onSeek = (value:any) => {
    videoRef.current.seek(value);
    setCurrentTime(value);
  };

  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return {
    videoRef,
    currentTime,
    comments,
    newComment,
    duration,
    setCurrentTime,
    setNewComment,
    handleAddComment,
    togglePlayPause,
    onProgress,
    onLoad,
    onSeek,
    paused,
    formatTime,
    muted,
    toggleMuteUnMute,
    setDuration,
    isFullscreen,
    toggleFullscreen,
  };
}

export default useVideoPlayerScreenController;