import React, {Component} from 'react';
import {Route, withRouter, Link, Switch} from 'react-router-dom';

import { indexPosts, indexComments, postPost, postComment, putPost, destroyPost} from '../../services/api_helper';

import './Forum.css';

import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import PostItem from './PostItem';
import UpdatePostForm from './UpdatePostForm';
import ForumHome from './ForumHome';

class ForumContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: null,
            comments: null
        }
    }

    //pulls all posts from backend
    readAllPosts = async () => {
        const posts = await indexPosts();
        this.setState({posts})
    }

    //pulls all comments from backend
    readAllComments = async () => {
        const comments = await indexComments();
        this.setState({comments})
    }

    //creates post and adds it to the database and state
    createPost = async (e,postData) => {
        e.preventDefault();
        const newPost = await postPost(postData);
        const posts = this.state.posts;
        const newPosts = [...posts, newPost];
        this.setState({
            posts: newPosts
        })
        this.props.history.push('/forum/posts');
    }

    //creates comment and adds it to the database and state
    createComment = async (e,commentData) => {
        e.preventDefault();
        let newComment = await postComment(commentData);
        newComment.User = {};
        newComment.User.username = commentData.User.username;
        const comments = this.state.comments;
        const newComments = [...comments, newComment];
        this.setState({
            comments: newComments
        })
        this.props.history.push(`/forum/posts/${newComment.postId}`)
    }

    //updates post in database and state
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

    render() {
        return (
            <div className='main'>
                <div className='forumHeader'>
                    <h2>Forum</h2>
                    <Link className='allPostLink' to='/forum/posts'><button>See all posts</button></Link>
                </div>
                
                <Switch>
                    <Route exact path = '/forum' component={ForumHome} />
                    <Route exact path='/forum/posts' render={() => (
                        <PostList posts={this.state.posts} comments={this.state.comments}/>
                    )} />
                    <Route exact path='/forum/posts/new' render={() => (
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
                </Switch>
            </div>
        )    
    }
}

export default withRouter(ForumContainer);