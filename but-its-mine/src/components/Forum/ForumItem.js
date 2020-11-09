import React from 'react';

function ForumItem(props) {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.postBody}</p>
        </div>
    )
}

export default ForumItem;