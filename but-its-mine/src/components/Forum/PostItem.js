import React from 'react';
import {Link} from 'react-router-dom';
import CreateCommentForm from './CreateCommentForm';
import CommentList from './CommentList';

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
                <div className='postItemHeader'>
                    <h1>{currentPost.title}</h1> 
                    {currentPost.User.id === props.currentUser.id 
                    && 
                        <div>
                            <button onClick={() => props.deletePost(currentPost.id)}>Delete</button>
                            <Link to={`/forum/posts/${currentPost.id}/edit`}><button>Edit</button></Link>
                        </div>
                    }
                </div>
                <h3>Posted by: {currentPost.User.username}</h3>
                <img src={currentPost.img} alt={currentPost.title} className='postItemImg'/>
                
                <p>{currentPost.body}</p>                
                <CreateCommentForm currentPost={currentPost.id} userId={props.currentUser.id} createComment={props.createComment}/>
                <CommentList comments={comments}/>
                </>
            )}
        </div>
    )
}

export default PostItem;