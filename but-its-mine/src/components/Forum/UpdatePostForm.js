import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UpdatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            title: '',
            userId: '',
            body: '',
        }
    }

    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({[name]:value});
    }

    componentDidMount() {
        const postToEdit = this.props.posts.find(post => post.id === parseInt(this.props.postId));
        console.log(postToEdit);
        this.setState({
            title: postToEdit.title,
            userId: postToEdit.userId,
            body: postToEdit.body
        })
    }

    render() {
        return(
            <div>
                <Link 
                    to = '/forum/posts' 
                ><button>Back to all posts</button></Link>
                <form onSubmit={(e) => this.props.updatePost(e, this.props.postId, this.state)}>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='userId'
                        value={this.state.userId}
                        onChange={this.handleChange}
                    />
                    <input
                        type='textarea'
                        name='body'
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='Update a Post' />
                </form>
            </div>
        )
    }
}

export default UpdatePostForm;