import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { PencilIcon } from '../assets/svg/PencilIcon';
import { TimeBox } from '../assets/svg/TimeBox';
import { CommonImages } from '../assets/images';
type CommentInputProps = {
  avatar: string;
  currentTime: number;
  newComment: string;
  setNewComment: (text: string) => void;
  onAddComment: () => void;
  onAttachPress: () => void;
};
export default function CommentInput({
  currentTime,
  newComment,
  setNewComment,
  onAddComment,
  onAttachPress,
}: CommentInputProps) {
  const formatTime = (sec: any) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputMainContainer}>
        <Image source={CommonImages.avatar} style={styles.avatar} />
        <TextInput
          placeholder="Write your comment here"
          style={styles.input}
          value={newComment}
          onChangeText={setNewComment}
        />
      </View>
      <View style={styles.commentButtons}>
        <TouchableOpacity style={styles.timeBox}>
          <TimeBox />
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAttachPress} style={styles.iconBtn}>
          <PencilIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentBtn} onPress={onAddComment}>
          <Text style={styles.commentBtnText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentButtons: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  timeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timeText: {
    color: '#b08d57',
    marginLeft: 4,
    fontSize: 12,
  },
  iconBtn: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 20,
    fontSize: 14,
  },
  commentBtn: {
    backgroundColor: '#b08d57',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  inputContainer: { 
    backgroundColor: '#f2f2f2', 
    position: 'absolute', 
    bottom: 0, 
    width: '100%' 
  },
  commentBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
  inputMainContainer:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal:8 
  }
});
