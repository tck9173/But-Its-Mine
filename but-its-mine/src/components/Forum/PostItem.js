import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateCommentForm from './CreateCommentForm';
import CommentList from './CommentList';

class PostItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPost : props.posts.find(post => post.id === parseInt(props.postId)),
            comments : props.comments.filter(comment => comment.postId === parseInt(props.postId))
        }
    }

    handleClick = (e, postId, likes) => {
        this.props.updatePostLike(e, this.props.postId, this.state.currentPost.likes + 1)
    }

    render() {
        return (
            <div>
                <Link 
                    to = '/forum/posts' 
                ><button>Back to all posts</button></Link>
                {this.state.currentPost && (
                    <>
                    <div className='postItemHeader'>
                        <h1>{this.state.currentPost.title}</h1> 
                        {this.state.currentPost.User.id === this.props.currentUser.id 
                        && 
                            <div>
                                <button onClick={() => this.props.deletePost(this.state.currentPost.id)}>Delete</button>
                                <Link to={`/forum/posts/${this.state.currentPost.id}/edit`}><button>Edit</button></Link>
                            </div>
                        }
                    </div>
                    <h3>Posted by: {this.state.currentPost.User.username}</h3>
                    <img src={this.state.currentPost.img} alt={this.state.currentPost.title} className='postItemImg'/>
                    <p>Likes: {this.state.currentPost.likes} <button onClick={(e) => this.handleClick(e, this.props.postId, this.state.currentPost.likes + 1)}>Like this!</button></p>
                    <p>{this.state.currentPost.body}</p>                
                    <h4>Join the conversation!</h4>
                    <CreateCommentForm 
                        currentPost={this.state.currentPost.id} 
                        userId={this.props.currentUser.id} 
                        createComment={this.props.createComment} 
                        username={this.props.currentUser.username}
                    />
                    <h4>Comments: </h4>
                    <CommentList comments={this.state.comments}/>
                    </>
                )}
            </div>
        )
    }
}

export default PostItem;