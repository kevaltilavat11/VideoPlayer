import { useRef, useState } from "react";

const useVideoPlayerScreenController = () => {
  // Add your controller logic here
    const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [drawingPaths, setDrawingPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const [color, setColor] = useState('#FF0000');
  const [isDrawing, setIsDrawing] = useState(false);

const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments(prev => [
      ...prev,
      { id: Date.now().toString(), time: currentTime, text: newComment },
    ]);
    setNewComment('');
  };

  const handleTouchStart = (evt) => {
    if (!isDrawing) return;
    const { locationX, locationY } = evt.nativeEvent;
    setCurrentPath(`M${locationX} ${locationY}`);
  };

  const handleTouchMove = (evt) => {
    if (!isDrawing || !currentPath) return;
    const { locationX, locationY } = evt.nativeEvent;
    setCurrentPath(prev => `${prev} L${locationX} ${locationY}`);
  };

  const handleTouchEnd = () => {
    if (currentPath) {
      setDrawingPaths(prev => [...prev, { d: currentPath, color }]);
      setCurrentPath('');
    }
}

  return {
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
  };
}

export default useVideoPlayerScreenController;