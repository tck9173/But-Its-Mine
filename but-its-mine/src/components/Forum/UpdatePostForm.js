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
                <div className = 'postFormWrapper'>
                    <form className = 'postForm' onSubmit={(e) => this.props.updatePost(e, this.props.postId, this.state)}>
                        <div>
                            <h4>Title:</h4>
                            <input
                                type='text'
                                name='title'
                                required
                                maxlength='255'
                                value={this.state.title}
                                onChange={this.handleChange}
                                className = 'postFormInput'
                            />
                        </div>
                        <div>
                            <h4>Image URL:</h4>
                        <input
                            type='text'
                            name='img'
                            maxlength='255'
                            value={this.state.img}
                            onChange={this.handleChange}
                            className = 'postFormInput'
                        />
                        </div>
                        <div>
                            <h4>Post Content:</h4>
                            <textarea
                                type='text'
                                name='body'
                                required
                                maxlength='2000'
                                value={this.state.body}
                                onChange={this.handleChange}
                                className = 'postFormInput'
                            />    
                        </div>
                        
                        <input className='postFormSubmit' type='submit' value='Update a Post' />
                    </form>
                    {this.state.img && 
                        <div className='postFormPreviewWrapper'>   
                            <p>Image preview</p>
                            <img src={this.state.img} alt='preview'/>
                        </div>
                    }
                </div>
                <Link 
                    to = '/forum/posts' 
                ><button>Back to all posts</button></Link>
            </div>
        )
    }
}

export default UpdatePostForm;