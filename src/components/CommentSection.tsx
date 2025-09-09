import React from 'react';
import { FlatList, KeyboardAvoidingView } from 'react-native';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { CommonImages } from '../assets/images';

type CommentsSectionProps = {
    comments: any[];
    videoRef: any;
    currentTime: number;
    setCurrentTime: (time: number) => void;
    newComment: string;
    setNewComment: (text: string) => void;
    handleAddComment: () => void;

};

const CommentsSection = (props: CommentsSectionProps) => {
    const { 
        comments, 
        videoRef, 
        currentTime,  
        newComment, 
        setNewComment, 
        handleAddComment 
    } = props;

    const handleSeek = (time: any) => {
        videoRef.current.seek(time);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='height' keyboardVerticalOffset={58}>
            <FlatList
                data={comments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<CommentItem item={item} onSeek={handleSeek} />)}
            />
            <CommentInput
                avatar={CommonImages.avatar}
                currentTime={currentTime}
                newComment={newComment}
                setNewComment={setNewComment}
                onAddComment={handleAddComment}
                onAttachPress={() => console.log('Attach pressed')}
            />
        </KeyboardAvoidingView>
    );
}
export default CommentsSection;