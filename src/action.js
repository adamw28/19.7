import uuid from 'uuid';
import { store } from './index';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundAddComment = text => store.dispatch(addComment(text));
function removeComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
}

function editComment(text, commentId) {
    return {
        type: EDIT_COMMENT,
        text,
        id: commentId
    }
}

function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

export { boundAddComment, removeComment, editComment, thumbUpComment, thumbDownComment };