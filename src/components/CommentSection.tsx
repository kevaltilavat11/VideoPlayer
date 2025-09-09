import React from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet } from 'react-native';
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
    handleMenu: () => void;
    deleteComment: (id: any) => void;
    commentDelete?: boolean;

};

const CommentsSection = (props: CommentsSectionProps) => {
    const { 
        comments, 
        videoRef, 
        currentTime,  
        newComment, 
        setNewComment, 
        handleAddComment,
        handleMenu,
        deleteComment,
        commentDelete
    } = props;

    const handleSeek = (time: any) => {
        videoRef.current.seek(time);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height' keyboardVerticalOffset={58}>
            <FlatList
                data={comments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<CommentItem item={item} onSeek={handleSeek} handleMenu={handleMenu} deleteComment={deleteComment} commentDelete={commentDelete} />)}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default CommentsSection;