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

    //renders create comment form
    render() {
        return(
            <div className='postFormWrapper'>
                <form className = 'postForm' onSubmit={(e) => this.props.createPost(e, this.state)}>
                    <div>
                        <h4>Title:</h4>
                        <input
                            type='text'
                            name='title'
                            required
                            maxLength='255'
                            value={this.state.title}
                            onChange={this.handleChange}
                            className='postFormInput'
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
                            className='postFormInput'
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
                            className='postFormInput'
                        />  
                    </div>
                    
                    <input type='submit' value='Post It!' className='postFormSubmit'/>
                </form>
                {this.state.img && 
                    <div className='postFormPreviewWrapper'>   
                        <p>Image preview</p>
                        <img src={this.state.img} alt='preview' className='postFormPreviewImg'/>
                    </div>
                }
            </div>
        )
    }
}

export default CreatePostForm;