import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import { indexPosts, postPost, putPost, destroyPost} from '../../services/api_helper';


import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import PostItem from './PostItem';
import UpdatePostForm from './UpdatePostForm';

class ForumContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: null
        }
    }

    readAllPosts = async () => {
        const posts = await indexPosts();
        this.setState({posts})
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

    updatePost = async (e,id, postData) => {
        e.preventDefault();
        const updatedPost = await putPost(id, postData);
        const posts = this.state.posts;
        const newPosts = posts.map(post => post.id === parseInt(id) ? updatedPost : post)
        this.setState({
            posts: newPosts
        })
        this.props.history.push('/forum/posts');
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
    }

    render() {
        return (
            <div className='main'>
                <Route exact path='/forum/posts' render={() => (
                    <PostList posts={this.state.posts} />
                )} />
                <Route path='/forum/posts/new' render={() => (
                    <CreatePostForm createPost={this.createPost} />
                )} />
                <Route exact path='/forum/posts/:id' render={(props) => (
                    <PostItem
                        posts={this.state.posts}
                        postId={props.match.params.id}
                        deletePost={this.deletePost}
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

export default ForumContainer