import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateCommentForm from './CreateCommentForm';
import CommentList from './CommentList';

class PostItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPost : null
        }
    }

    handleClick = (e, postId, likes) => {
        this.props.updatePostLike(e, this.props.postId, this.state.currentPost.likes + 1)
        this.refs.btn.setAttribute("disabled", "disabled")
        let updatedPost = this.state.currentPost
        updatedPost.likes = likes
        this.setState({
            currentPost : updatedPost
        })
    }

    updatePost = () => {
        const currentPost = this.props.posts.find(post => post.id === parseInt(this.props.postId))
        this.setState({
            currentPost,
        })
    }

    componentDidMount () {
        this.updatePost();
    }

    render() {   
          
        return (
            <div>
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
                    {this.state.currentPost.img.length > 0 && <img src={this.state.currentPost.img} alt={this.state.currentPost.title} className='postItemImg'/> }
                    <p>Likes: {this.state.currentPost.likes} <button ref='btn' onClick={(e) => this.handleClick(e, this.props.postId, this.state.currentPost.likes + 1)}>Like this!</button></p>
                    <p>{this.state.currentPost.body}</p>                
                    <h4>Join the conversation!</h4>
                    <CreateCommentForm 
                        currentPost={this.state.currentPost.id} 
                        userId={this.props.currentUser.id} 
                        createComment={this.props.createComment} 
                        username={this.props.currentUser.username}
                    />
                    <h4>Comments: </h4>
                    <CommentList 
                        comments={this.props.comments}
                        postId={this.props.postId}
                    />
                    </>
                )}
            </div>
        )
    }
}

export default PostItem;