import React, {Component} from 'react';

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

    //populates form with chosen post
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
                                maxLength='255'
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
                            maxLength='255'
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
                                maxLength='2000'
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
                            <img src={this.state.img} alt='preview' className='postFormPreviewImg'/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default UpdatePostForm;