import React from 'react';

const CommentList = (props) => {
    const comments = props.comments.filter(comment => comment.postId === parseInt(props.postId))
    return (
        <div>
            {comments && comments.map((comment, index) => {
                return (
                    <div className='commentContainer' key={index}>
                        <p className='commentUsername'>By: {comment.User.username}</p>
                        <p className='commentBody'>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;