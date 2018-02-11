import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

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

export default { addComment, removeComment, editComment, thumbUpComment };