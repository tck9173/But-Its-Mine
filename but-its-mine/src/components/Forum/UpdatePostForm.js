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
        this.setState({
            title: postToEdit.title,
            userId: postToEdit.userId,
            body: postToEdit.body,
            img: postToEdit.img
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
                        required
                        maxlength='255'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='img'
                        maxlength='255'
                        value={this.state.img}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type='text'
                        name='body'
                        required
                        maxlength='2000'
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='Update a Post' />
                </form>
                {this.state.img && <div>   
                    <p>Image preview</p>
                    <img src={this.state.img} alt='preview'/>
                </div>
                }
            </div>
        )
    }
}

export default UpdatePostForm;