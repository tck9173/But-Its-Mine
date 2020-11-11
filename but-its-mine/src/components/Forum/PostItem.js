import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
    const currentPost = props.posts.find(post => post.id === parseInt(props.postId));
    return (
        <div>
            <Link 
                to = '/forum/posts' 
            ><button>Back to all posts</button></Link>
            {currentPost && (
                <>
                <h1>{currentPost.title}</h1>
                <p>{currentPost.userId}</p>
                <p>{currentPost.body}</p>
                <button onClick={() => props.deletePost(currentPost.id)}>Delete</button>
                <Link to={`/forum/posts/${currentPost.id}/edit`}><button>Edit</button></Link>
                </>
            )}
        </div>
    )
}

export default PostItem;