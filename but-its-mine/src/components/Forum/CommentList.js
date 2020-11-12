import React from 'react';

const CommentList = (props) => {
    return (
        <div>
            {props.comments && props.comments.map((comment, index) => {
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