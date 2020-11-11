import React from 'react';
import {Link} from 'react-router-dom';

const PostList = (props) => {
    return (
        <div>
            
            {props.posts && props.posts.map((post, index) => {
                return (
                    <Link to={`/forum/posts/${post.id}`} key={index}><h3>{post.title}</h3></Link>
                )
            })}
            <Link to='/forum/posts/new'><button>Add a new post</button></Link>
        </div>
    )
}

export default PostList;