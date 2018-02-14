import React from 'react';
import Comment from './Comment';
import comments from './comments';

const CommentsList = ({comments}) => {console.log(comments);
	return <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;}

export default CommentsList;