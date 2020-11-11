import React from 'react';
import {Link} from 'react-router-dom';
import CreateCommentForm from './CreateCommentForm';

const PostItem = (props) => {
    const currentPost = props.posts.find(post => post.id === parseInt(props.postId));
    const comments = props.comments.filter(comment => comment.postId === parseInt(props.postId))
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
                <img src={currentPost.img} alt={currentPost.title}/>
                <button onClick={() => props.deletePost(currentPost.id)}>Delete</button>
                <Link to={`/forum/posts/${currentPost.id}/edit`}><button>Edit</button></Link>
                <CreateCommentForm currentPost={currentPost.id} userId={props.currentUser} createComment={props.createComment}/>
                {comments.map((comment, index) => {
                    return (
                        <p>{comment.body}</p>
                    )
                })}
                </>
            )}
        </div>
    )
}

export default PostItem;