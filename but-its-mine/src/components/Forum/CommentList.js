import React from 'react';

const CommentList = (props) => {
    return (
        <div>
            {props.comments && props.comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;