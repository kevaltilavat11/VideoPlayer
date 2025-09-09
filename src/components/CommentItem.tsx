import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CommonImages } from '../assets/images';
import { MenuIcon } from '../assets/svg/MenuIcon';
import moment from 'moment';

export default function CommentItem({ item, onSeek }: any) {
  const formatTime = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


const getDisplayTime = (time:string) => {
  const diffInSeconds = moment().diff(moment(time), 'seconds');

  if (diffInSeconds < 60) {
    return 'Just now';
  } else {
    return moment(time).format('LT');
  }
};
  return (
    <TouchableOpacity onPress={() => onSeek(item.time)} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={CommonImages.avatar}
          width={32}
          height={32}
          style={styles.avatar}
        />
        <Text style={styles.name}>{"User"}</Text>
        <Text style={styles.time}>{getDisplayTime(JSON.parse(item.id))}</Text>
        <TouchableOpacity  style={styles.menu}>
          <MenuIcon size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.massageContainer}>
          <Text style={[styles.time,styles.marginBottom]}>{formatTime(item.time)}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.reply}>Reply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  massageContainer: { flexDirection: 'row', alignItems: 'center' },
  content: {
    flex: 1,
    paddingHorizontal: 5
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignSelf:'center',
    marginBottom: 2,
  },
  name: {
    fontWeight: '600',
    marginRight: 8,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  marginBottom:{
    marginBottom: 4
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 8,
    maxWidth: '80%',
  },
  reply: {
    color: '#0a84ff',
    fontSize: 13,
    paddingHorizontal: 35,
  },
  menu: {
    color: '#888',
    paddingHorizontal: 6,
    position: 'absolute',
    right: 0,
  },
});
