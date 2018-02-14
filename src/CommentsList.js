import React from 'react';
import Comment from './Comment';
import CommentContainer from './CommentContainer';

const CommentsList = ({comments}) => {
	return <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;}

export default CommentsList;