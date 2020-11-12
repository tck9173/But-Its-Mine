import React, {Component} from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            title: '',
            body: '',
            userId: this.props.currentUser.id,
            img:''
        }
    }

    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='createPostFormWrapper'>
                <form className = 'createPostForm' onSubmit={(e) => this.props.createPost(e, this.state)}>
                    <div>
                        <h4>Title:</h4>
                        <input
                            type='text'
                            name='title'
                            required
                            value={this.state.title}
                            onChange={this.handleChange}
                            className='createPostFormInput'
                        />  
                    </div>
                    <div>
                        <h4>Image URL:</h4>
                        <input
                            type='text'
                            name='img'
                            value={this.state.img}
                            onChange={this.handleChange}
                            className='createPostFormInput'
                        />
                    </div>
                    <div>
                        <h4>Post Content:</h4>
                        <textarea
                            type='text'
                            name='body'
                            required
                            value={this.state.body}
                            onChange={this.handleChange}
                            className='createPostFormInput'
                        />  
                    </div>
                    
                    <input type='submit' value='Post It!' className='createPostFormSubmit'/>
                </form>
                {this.state.img && 
                    <div className='createPostFormPreviewWrapper'>   
                        <p>Image preview</p>
                        <img src={this.state.img} alt='preview' className='createPostFormPreviewImg'/>
                    </div>
                }
            </div>
        )
    }
}

export default CreatePostForm;