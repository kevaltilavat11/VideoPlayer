import { useEffect, useRef, useState } from "react";
import { getData, storeData } from "../constants/AyncStorage";

const useVideoPlayerScreenController = () => {
  const videoRef = useRef<any>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [comments, setComments] = useState<any>([]);
  const [newComment, setNewComment] = useState('');
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, isSetFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [commentDelete,setCommentsDelete] = useState(false);

  useEffect(() => {
    const loadComments = async () => {
      const storedComments = await getData("COMMENTS");
      if (storedComments) {
        setComments(storedComments);
      }
    };
    loadComments();
  }, [comments,newComment]);

const handleAddComment = () => {
    if (!newComment.trim()) return;
    storeData("COMMENTS", [...comments,{ id: Date.now().toString(), time: currentTime, text: newComment}].reverse());
    setComments((prev: any) => [
      ...prev,
      { id: Date.now().toString(), time: currentTime, text: newComment },
    ].reverse());
    setNewComment('');
  };

const deleteComment = (id:any) => {
    console.log("id",id)
    const updatedComments = comments.filter((comment:any) => comment.id !== id).reverse();
    setComments(updatedComments);
    storeData("COMMENTS", updatedComments);
    handleMenu()
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
  
  const handleMenu = () => {
    setCommentsDelete(!commentDelete);
  }

  return {
    videoRef,
    currentTime,
    comments,
    newComment,
    duration,
    setCurrentTime,
    setNewComment,
    deleteComment,
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
    commentDelete,
    handleMenu,
  };
}

export default useVideoPlayerScreenController;