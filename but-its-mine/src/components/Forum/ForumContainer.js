import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

import { indexPosts, indexComments, postPost, postComment, putPost, destroyPost} from '../../services/api_helper';


import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import PostItem from './PostItem';
import UpdatePostForm from './UpdatePostForm';

class ForumContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: null,
            comments: null
        }
    }

    readAllPosts = async () => {
        const posts = await indexPosts();
        this.setState({posts})
    }

    readAllComments = async () => {
        const comments = await indexComments();
        this.setState({comments})
    }

    createPost = async (e,postData) => {
        e.preventDefault();
        const newPost = await postPost(postData);
        const posts = this.state.posts;
        const newPosts = [... posts, newPost];
        this.setState({
            posts: newPosts
        })
        this.props.history.push('/forum/posts');
    }

    createComment = async (e,commentData) => {
        e.preventDefault();
        let newComment = await postComment(commentData);
        newComment.User = {};
        newComment.User.username = commentData.User.username;
        const comments = this.state.comments;
        const newComments = [... comments, newComment];
        this.setState({
            comments: newComments
        })
    }

    updatePost = async (e,id, postData) => {
        e.preventDefault();
        console.log(postData)
        
        const updatedPost = await putPost(id, postData);
        const posts = this.state.posts;
        const newPosts = posts.map(post => post.id === parseInt(id) ? updatedPost : post)
        this.setState({
            posts: newPosts
        })
        this.props.history.push('/forum/posts');
    }

    updatePostLike = async (e, id, postData) => {
        e.preventDefault();
        let postObject = 
            { 
                likes: postData
            }
        console.log(postObject)
        const updatedPost = await putPost(id, postObject);
        const posts = this.state.posts;
        const newPosts = posts.map(post => post.id === parseInt(id) ? updatedPost : post)
        this.setState({
            posts: newPosts
        })
    }

    deletePost = async (id) => {
        await destroyPost(id);
        const posts = this.state.posts;
        const filterPosts = posts.filter(post => post.id !== parseInt(id));
        this.setState({
            posts: filterPosts
        })
        this.props.history.push('/forum/posts');
    }

    componentDidMount() {
        this.readAllPosts();
        this.readAllComments();
    }

    // componentWillUnmount = () => {
    //     this.props.history.push('/');
    // }

    render() {
        return (
            <div className='main'>
                <Route exact path='/forum/posts' render={() => (
                    <PostList posts={this.state.posts} comments={this.state.comments}/>
                )} />
                <Route path='/forum/posts/new' render={() => (
                    <CreatePostForm createPost={this.createPost} currentUser={this.props.currentUser}/>
                )} />
                <Route exact path='/forum/posts/:id' render={(props) => (
                    <PostItem
                        posts={this.state.posts}
                        comments={this.state.comments}
                        postId={props.match.params.id}
                        deletePost={this.deletePost}
                        currentUser={this.props.currentUser}
                        createComment = {this.createComment}
                        updatePostLike={this.updatePostLike}
                    />
                )} />
                <Route path = '/forum/posts/:id/edit' render ={(props) => (
                    <UpdatePostForm
                        posts={this.state.posts}
                        updatePost={this.updatePost}
                        postId={props.match.params.id}
                    />
                )} />
            </div>
        )    
    }
}

export default withRouter(ForumContainer);