import React, {Component} from 'react';

class CreateCommentForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            body: '',
            userId: props.userId,
            postId: props.currentPost,
            User: {
                username: props.username
            }
        }
    }

    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) => {
        this.props.createComment(e, this.state);
        this.setState({body: ''})
    }

    render() {
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <textarea
                    type='text'
                    name='body'
                    value={this.state.body}
                    required
                    maxLength='255'
                    onChange={this.handleChange}
                    className='commentInput'
                />
                <input type='submit' value='Comment!' />
            </form>
        )
    }
}

export default CreateCommentForm;